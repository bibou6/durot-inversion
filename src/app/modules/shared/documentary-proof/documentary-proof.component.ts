import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DocumentaryProof } from 'src/app/core/models/documentaryProof';
import { DocumentaryProofService } from 'src/app/core/services/documentary-proof.service';

@Component({
  selector: 'app-documentary-proof',
  templateUrl: './documentary-proof.component.html',
  styleUrls: ['./documentary-proof.component.sass']
})
export class DocumentaryProofComponent implements OnInit {


  createElement: boolean = false;
  showElement: boolean = false;
  element: DocumentaryProof;

  constructor(
    private documentaryProofService:DocumentaryProofService,
  ) { }

  ngOnInit(): void {
    
    
  }

  
  create(event){
    this.documentaryProofService.create(event).subscribe(
      res => {
        console.log(res);
        this.element = res;
        this.createElement = false;
        this.showElement = true;
      },
      err => {
        console.log(err);
      }
    )
  }

  openCreation(){
    this.createElement = true;
  }

  list(){
    this.documentaryProofService.list().subscribe(
      res => {
        console.log(res);
      }, 
      err => {
        console.log(err);
      }
    );
  }

  getById(id:number){
    this.documentaryProofService.getById(id).subscribe(
      res => {
        console.log(res);
      }, 
      err => {
        console.log(err);
      }
    );
  }

}
