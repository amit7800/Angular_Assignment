import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full'},
  
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent ,},
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path:'addpatient',component:AddPatientComponent},
  { path:'updatepatient/:_id',component:AddPatientComponent},
  { path: 'about', component: AboutComponent ,canActivate: [AuthGuard]},
  {path:"pipe",component:PipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
