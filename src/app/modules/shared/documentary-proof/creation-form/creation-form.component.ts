import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DocumentaryProof } from 'src/app/core/models/documentaryProof';

@Component({
  selector: 'app-documentary-proof-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.sass']
})
export class CreationFormComponent implements OnInit {

  newElement : DocumentaryProof = DocumentaryProof.init();
  form;

  @Output()
  element  = new EventEmitter<DocumentaryProof>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.newElement);
  }


  create(data) {
    // Process checkout data here
    this.newElement = data;
    this.element.emit(this.newElement);

    this.newElement = DocumentaryProof.init();
    this.form.reset();

  }

}
