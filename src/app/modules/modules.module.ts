import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { CityManagementModule } from './city-management/city-management.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule, 
    SharedModule,
    CityManagementModule,
    TranslateModule.forChild()
  ],
  exports: [
    TranslateModule
  ]
})
export class ModulesModule { }
