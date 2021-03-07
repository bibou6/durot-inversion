import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/guards/authentication.guard';
import { CityViewComponent } from './city/city-view/city-view.component';
import { CityComponent } from './city/city.component';
import { GetCitiesResolver } from './resolvers/get-cities.resolver';
import { GetCityResolver } from './resolvers/get-city.resolver';

const routes: Routes = [
  { 
    path: '', component: CityComponent,
    canActivate: [AuthenticationGuard] ,
    resolve: {
      cities: GetCitiesResolver
    },
  },
  { 
    path: 'view/:id', 
    component: CityViewComponent, 
    canActivate: [AuthenticationGuard], 
    resolve: { 'city' : GetCityResolver }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityManagementRoutingModule { }
