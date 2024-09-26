
# Wedding Image & Video Uploader - Frontend

This is the frontend application for the Wedding Image & Video Uploader, developed in Angular. The purpose of this project is to allow guests to upload their images and videos from a wedding. This project serves as a hands-on exercise to demonstrate my skills in Angular, Docker, and web app deployment.

## Features

- Responsive and user-friendly interface for uploading images and videos.
- Multiple file selection.
- Progress bar indicating the status of file uploads.
- Integrates with a backend API developed in FastAPI for file storage.

## Technologies Used

- Angular
- HTML5/CSS3
- TypeScript
- Docker
- Netlify (for deployment)

## Getting Started

### Prerequisites

- Node.js and npm installed. [Download here](https://nodejs.org/)
- Angular CLI installed globally. You can install it via:

```bash
npm install -g @angular/cli
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/wedding-uploader-frontend.git
cd wedding-uploader-frontend
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

You can run the Angular development server using the following command:

```bash
ng serve
```

Navigate to `http://localhost:4200` to view the application in your browser.

### Building the Application

To build the application for production, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Docker Setup

This app is containerized using Docker for easier deployment.

1. Build the Docker image:

```bash
docker build -t wedding-frontend .
```

2. Run the container:

```bash
docker run -p 4200:80 wedding-frontend
```

### Deployment

The app can be deployed easily to platforms like Netlify. You can deploy by connecting your GitHub repo and following the deployment steps on Netlify.

## Purpose

This project was developed to demonstrate my skills in Docker and Angular development. It also showcases my ability to work on end-to-end full-stack web applications.

## License

This project is licensed under the MIT License.
