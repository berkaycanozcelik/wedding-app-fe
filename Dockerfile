# Step 1: Build the Angular application
# Use an official Node.js image to build the app
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Serve the application using NGINX
# Use an official NGINX image to serve the built Angular app
FROM nginx:stable-alpine

# Copy the build output to the NGINX HTML folder
COPY --from=build /app/dist/wedding-fe /usr/share/nginx/html

# Copy the custom NGINX configuration file (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
