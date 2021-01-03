import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TestComponent } from './test/test.component';
import { HttpModule } from './http.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ModulesModule } from './modules/modules.module';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './core/services/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModulesModule,
    CoreModule,
    HttpModule.forRoot({ environment }),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
