import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SinglePictureComponentComponent } from './single-picture-component/single-picture-component.component';
import { MultiplePictureComponentComponent } from './multiple-picture-component/multiple-picture-component.component';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [
    SinglePictureComponentComponent,
    MultiplePictureComponentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxDropzoneModule,
    ImageCropperModule,
    TranslateModule
    
  ], 
  exports: [
    TranslateModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MultiplePictureComponentComponent,
    SinglePictureComponentComponent,
    ImageCropperModule,
    TranslateModule
  ]
})
export class SharedModule { }
