import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/guards/authentication.guard';
import { CityComponent } from './city/city.component';
import { GetCitiesResolver } from './resolvers/get-cities.resolver';

const routes: Routes = [
  { 
    path: '', component: CityComponent,
    canActivate: [AuthenticationGuard] ,
    resolve: {
      cities: GetCitiesResolver
    },
  }, 
  { path: 'city', component: CityComponent, canActivate: [AuthenticationGuard] }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityManagementRoutingModule { }
