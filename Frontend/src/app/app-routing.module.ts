import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CenterRegistrationComponent } from './pages/center-registration/center-registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SystemadminProfileComponent } from './pages/systemadmin-profile/systemadmin-profile.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { MedicalCentersComponent } from './pages/medical-centers/medical-centers.component';
import { SystemadminRegisterComponent } from './pages/systemadmin-register/systemadmin-register.component';

import { LoginComponent } from './pages/login/login.component';
import { MedicalAdminProfileComponent } from './pages/medical-admin-profile/medical-admin-profile.component';
import { AppointmentCreationComponent } from './pages/appointment-creation/appointment-creation.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { MedicalcenterProfileComponent } from './pages/medicalcenter-profile/medicalcenter-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BloodDonationPageComponent } from './pages/blood-donation-page/blood-donation-page.component';
import { MedicalcenterScheduleComponent } from './pages/medicalcenter-schedule/medicalcenter-schedule.component';
import { SysadminListComponent } from './pages/sysadmin-list/sysadmin-list.component';
import { SysadminCenterListComponent } from './pages/sysadmin-center-list/sysadmin-center-list.component';
import { MakeAppointmentComponent } from './pages/make-appointment/make-appointment.component';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'medical-centers', component: MedicalCentersComponent },
  { path: 'medical-center-profile', component: MedicalcenterProfileComponent },
  { path: 'medical-admin-profile', component: MedicalAdminProfileComponent },
  { path: 'create-appointment', component: AppointmentCreationComponent },
  { path: 'sysadmin', component: SystemadminProfileComponent },
  { path: 'search-users', component: UserSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sysadmin', component: SystemadminProfileComponent },
  { path: 'new-center', component: CenterRegistrationComponent },
  { path: 'register-sysadmin', component: SystemadminRegisterComponent },
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'medical-center-profile', component: MedicalcenterProfileComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'blood-donation-page', component: BloodDonationPageComponent },
  { path:'medical-center-schedule', component: MedicalcenterScheduleComponent},
  { path:'admins', component: SysadminListComponent},
  { path:'sysadmin-centers', component: SysadminCenterListComponent},
  { path: 'make-appointment', component: MakeAppointmentComponent},
  { path: 'my-appointments', component: MyAppointmentsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
