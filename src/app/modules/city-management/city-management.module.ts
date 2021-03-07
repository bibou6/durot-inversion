import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetCitiesResolver } from './resolvers/get-cities.resolver';
import { CityComponent } from './city/city.component';
import { SharedModule } from '../shared/shared.module';
import { AddCityComponent } from './city/add-city/add-city.component';
import { CityCardComponent } from './city/cards/city-card/city-card.component';
import { CityViewComponent } from './city/city-view/city-view.component';
import { AddAdditionalInformationComponent } from './city/forms/add-additional-information/add-additional-information.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CityInfoComponent } from './city/forms/city-info/city-info.component';
import { CityBasicInfoComponent } from './city/forms/city-basic-info/city-basic-info.component';
import { CityRealEstateInfoComponent } from './city/forms/city-real-estate-info/city-real-estate-info.component';



@NgModule({
  declarations: [
    CityComponent,
    AddCityComponent,
    CityCardComponent,
    CityViewComponent,
    AddAdditionalInformationComponent,
    CityInfoComponent,
    CityBasicInfoComponent,
    CityRealEstateInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
	MatInputModule
  ],
  providers: [GetCitiesResolver]
})
export class CityManagementModule { }
