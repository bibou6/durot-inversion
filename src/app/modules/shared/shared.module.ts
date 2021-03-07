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
import { LightboxModule } from 'ngx-lightbox';
import { GalleryComponent } from './gallery/gallery.component';
import { LoaderComponent } from './loader/loader.component';
import { CoreModule } from 'src/app/core/core.module';
import { LabelComponent } from './label/label.component';



@NgModule({
  declarations: [
    SinglePictureComponentComponent,
    MultiplePictureComponentComponent,
    GalleryComponent,
    LoaderComponent,
    LabelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxDropzoneModule,
    ImageCropperModule,
    TranslateModule.forChild(),
    MaterialModule,
    LightboxModule
    
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
    GalleryComponent,
    LoaderComponent,
	LabelComponent,
	CoreModule
  ]
})
export class SharedModule { }
