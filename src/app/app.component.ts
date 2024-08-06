import { Component } from '@angular/core';
import { UploadComponent } from './upload/upload-component/upload-component.component';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  template: '<app-upload></app-upload>',
  standalone: true,
  imports: [HttpClientModule ,UploadComponent]
})
export class AppComponent {
  title = 'Image Upload App';
}
