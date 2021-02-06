import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';
import { AddCityComponent } from './add-city/add-city.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.sass']
})
export class CityComponent implements OnInit {

  

  cities:City[];
  newCity: City = City.Init();
  data:any;


  constructor(
    private cityService:CityService,
    private route:ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
    if( this.data != null && this.data.cities != null){
      this.cities = this.data.cities;
    }
  }

  addCity(){
    let dialogRef = this.dialog.open(AddCityComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
