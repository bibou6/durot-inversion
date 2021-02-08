import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCitiesResolver } from './resolvers/get-cities.resolver';
import { CityComponent } from './city/city.component';
import { ModulesModule } from '../modules.module';
import { SharedModule } from '../shared/shared.module';
import { AddCityComponent } from './city/add-city/add-city.component';
import { CityCardComponent } from './city/city-card/city-card.component';



@NgModule({
  declarations: [
    CityComponent,
    AddCityComponent,
    CityCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [GetCitiesResolver]
})
export class CityManagementModule { }
