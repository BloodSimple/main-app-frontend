import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CenterRegistrationComponent } from './pages/center-registration/center-registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SystemadminProfileComponent } from './pages/systemadmin-profile/systemadmin-profile.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { MedicalCentersComponent } from './pages/medical-centers/medical-centers.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SystemadminRegisterComponent } from './pages/systemadmin-register/systemadmin-register.component';

import { MedicalcenterProfileComponent } from './pages/medicalcenter-profile/medicalcenter-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicalAdminProfileComponent } from './pages/medical-admin-profile/medical-admin-profile.component';
import { AppointmentCreationComponent } from './pages/appointment-creation/appointment-creation.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path:'profile', component: UserProfileComponent },
  { path:'medical-centers', component: MedicalCentersComponent},
  { path:'medical-center-profile', component: MedicalcenterProfileComponent},
  { path:'medical-admin-profile', component: MedicalAdminProfileComponent},
  { path:'create-appointment', component: AppointmentCreationComponent},
  {path:'sysadmin', component: SystemadminProfileComponent},
  {path:'search-users', component:UserSearchComponent},
  { path: 'login', component: LoginComponent},
  {path:'sysadmin', component: SystemadminProfileComponent},
  {path:'new-center', component :CenterRegistrationComponent},
  {path:'register-sysadmin', component:SystemadminRegisterComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
