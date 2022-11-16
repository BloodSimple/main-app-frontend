import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MedicalCentersComponent } from './pages/medical-centers/medical-centers.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { MedicalcenterProfileComponent } from './pages/medicalcenter-profile/medicalcenter-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BloodDonationPageComponent } from './pages/blood-donation-page/blood-donation-page.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path:'profile', component: UserProfileComponent },
  { path:'medical-centers', component: MedicalCentersComponent},
  { path:'registration-page', component: RegistrationPageComponent},
  { path:'medical-center-profile', component: MedicalcenterProfileComponent},
  { path:'login-page', component: LoginPageComponent},
  { path:'blood-donation-page', component: BloodDonationPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
