import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InformationMap } from '../../../models/informationMap.model';

@Component({
  selector: 'app-add-additional-information',
  templateUrl: './add-additional-information.component.html',
  styleUrls: ['./add-additional-information.component.sass']
})
export class AddAdditionalInformationComponent implements OnInit {

	informationMap: InformationMap = InformationMap.Init();

	@Output()
	onValidated: EventEmitter<InformationMap> = new EventEmitter();

	nameFormControl = new FormControl(this.informationMap.name, [
		Validators.required,
	]);
	
	valueFormControl = new FormControl(this.informationMap.value, [
		Validators.required,
	]);

	informationForm: FormGroup = new FormGroup({
		name: this.nameFormControl,
		value: this.valueFormControl
	});

	toAdd: boolean  = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  showForm(){
	  this.toAdd = true;
  }

  onSubmitInformationData(data){
	if(data != null && data.value != null && data.name != null){
		this.informationMap.name = data.name;
    	this.informationMap.value = data.value;
		this.onValidated.emit(this.informationMap);
		this.toAdd = false;
	}
  }

  onCancel(){
	  this.toAdd = false;
  }




}
