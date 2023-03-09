import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {TestinginterceptorInterceptor} from './testinginterceptor.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TestinginterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
