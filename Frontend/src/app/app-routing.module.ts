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
import { DonationFormComponent } from './pages/donation-form/donation-form.component';

const routes: Routes = [
  // Homepage and medical centers page
  { path: '', component: HomepageComponent },
  { path: 'medical-centers', component: MedicalCentersComponent },
  // Profile pages for different users
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'medical-center-profile', component: MedicalcenterProfileComponent },
  { path: 'medical-admin-profile', component: MedicalAdminProfileComponent },
  { path: 'sysadmin', component: SystemadminProfileComponent },
  // Registration page and login page
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-page', component: LoginPageComponent },
  // Donation pages
  { path: 'donation-form', component: DonationFormComponent },
  { path: 'blood-donation-page', component: BloodDonationPageComponent },
  // Appointment and schedule pages
  { path: 'my-appointments', component: MyAppointmentsComponent },
  // TODO: New my-appointments page for MEDICAL_STAFF
  { path: 'make-appointment', component: MakeAppointmentComponent },
  // TODO: Delete this page later
        { path: 'create-appointment', component: AppointmentCreationComponent },
  { path: 'medical-center-schedule', component: MedicalcenterScheduleComponent },
  // Sysadmin pages
  { path: 'new-center', component: CenterRegistrationComponent },
  { path: 'register-sysadmin', component: SystemadminRegisterComponent },
  { path: 'admins', component: SysadminListComponent },
  { path: 'sysadmin-centers', component: SysadminCenterListComponent },
  // Other pages
  { path: 'search-users', component: UserSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
