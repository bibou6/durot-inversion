import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { CityManagementRoutingModule } from './modules/city-management/city-management-routing.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { DocumentaryProofComponent } from './modules/shared/documentary-proof/documentary-proof.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'documentaryProof', component: DocumentaryProofComponent },
  { path: 'test', component: TestComponent },
  { path: 'city', canActivate: [AuthenticationGuard], loadChildren: () => CityManagementRoutingModule }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
