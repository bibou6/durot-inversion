import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../models/city.model';
import { CityService } from '../services/city.service';
import { AddCityComponent } from './add-city/add-city.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierService } from 'src/app/core/services/notifier.service';

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
    public dialog: MatDialog,
    private notifier:NotifierService) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
    if( this.data != null && this.data.cities != null){
      this.cities = this.data.cities;
    }
  }

  addCity(){
    let dialogRef = this.dialog.open(AddCityComponent, {
      height: 'auto',
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        this.cities.push(result);
        this.notifier.notify('city.flash.success.added');
      }
    });
  }

  removeCity(event){
    this.cities.splice(event,1);
  }


  

}
