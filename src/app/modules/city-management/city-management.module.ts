import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCitiesResolver } from './resolvers/get-cities.resolver';
import { CityComponent } from './city/city.component';
import { ModulesModule } from '../modules.module';
import { SharedModule } from '../shared/shared.module';
import { AddCityComponent } from './city/add-city/add-city.component';



@NgModule({
  declarations: [
    CityComponent,
    AddCityComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [GetCitiesResolver]
})
export class CityManagementModule { }
