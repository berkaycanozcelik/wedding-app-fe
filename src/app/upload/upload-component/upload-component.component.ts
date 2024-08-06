import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload-component.component.html',
  styleUrls: ['upload-component.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class UploadComponent {
  selectedFiles: File[] = [];
  message = '';
  progress = 0;
  private uploadUrl = 'https://127.0.0.1:8000/upload-file/'; // Updated to a generic file upload endpoint

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  onUpload(): void {
    this.progress = 0;

    if (this.selectedFiles.length === 0) {
      this.message = 'Please select files to upload.';
      return;
    }

    const formData = new FormData();
    this.selectedFiles.forEach(file => formData.append('files', file, file.name));

    this.http.post<any>(this.uploadUrl, formData, {
      reportProgress: true,
      observe: 'events'
    }).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          }
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Files uploaded successfully!';
        }
      },
      error: (err) => {
        this.progress = 0;
        this.message = 'An error occurred during upload.';
        console.error('Upload error:', err);
      }
    });
  }
}
