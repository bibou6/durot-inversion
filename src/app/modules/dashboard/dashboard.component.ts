import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Test } from 'src/app/core/models/test.model';
import { TestService } from 'src/app/core/services/test.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {


  results: Test[] = [];

  searchedNumber: number;

  testForm;

  test:Test ;

  newTest:Test;

  constructor(
    private testService:TestService,
    private formBuilder: FormBuilder
  ) {
   
   }

  ngOnInit(): void {
    this.newTest = Test.testInit();
    this.testForm = this.formBuilder.group(this.newTest);
    console.log(this.newTest);
    this.testService.test().subscribe(
      res => {
        console.log(res);
        this.results = res;
        console.log(this.results);
      }
    );
  }

  getResult(): void{
    this.testService.testWithId(this.searchedNumber).subscribe(
      res => {
        this.test = res;
      }
    )
  }

  setNumber(event){
    this.searchedNumber = event.target.value;
  }

  onSubmit(data) {
    // Process checkout data here
    this.newTest = data;
    this.testService.createtest(this.newTest).subscribe(
      res => { 
        this.searchedNumber = res.id
        this.getResult();
      }
    );

    this.newTest = Test.testInit()
    this.testForm.reset();

  }

}
