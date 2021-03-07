import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.sass']
})
export class LabelComponent implements OnInit {

	@Input()
	label:string;

	@Input()
	value: string;

	@Input()
	icon: string = null;

	@Input()
	iconColor: string = "primary";

	@Output()
	clicked :EventEmitter<boolean> = new EventEmitter();

	constructor() { 
		console.log(this.label);
	}

	ngOnInit(): void {
	}

	onClickIcon(){
		this.clicked.emit(true);
	}

}
