import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-single-picture-component',
  templateUrl: './single-picture-component.component.html',
  styleUrls: ['./single-picture-component.component.sass']
})
export class SinglePictureComponentComponent implements OnInit {


  @Input()
  label:string

  @Output()
  addImageEvent = new EventEmitter<string>();


  imageChangedEvent: any = '';
  croppedImage: any = '';

  validCrop: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded(image: HTMLImageElement) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }  

  validateCrop(){
      this.validCrop = true;
      this.addImageEvent.emit(this.croppedImage);
  }
  
  reCrop(){
      this.validCrop = false;
      this.addImageEvent.emit("");
  }
}
