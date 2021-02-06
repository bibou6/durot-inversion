import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentaryProofComponent } from './documentary-proof/documentary-proof.component';
import { CreationFormComponent } from './documentary-proof/creation-form/creation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalDatePipe } from 'src/app/core/pipes/local-date.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [DocumentaryProofComponent, CreationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule,
    FlexLayoutModule
  ], 
  exports: [
    DocumentaryProofComponent,
    TranslateModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
