import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

import { HttpClientModule } from '@angular/common/http';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from 'angular-datatables';
import { PipeComponent } from './pipe/pipe.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    // AboutComponent,
    NavbarComponent,
   
   
    DashboardComponent,
            AddPatientComponent,
            PipeComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 HttpClientModule,
 FormsModule, ReactiveFormsModule,
 BrowserAnimationsModule,
 ToastrModule.forRoot(),
 Ng2SearchPipeModule,
 DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
