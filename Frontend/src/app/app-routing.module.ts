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
import { MedicalAdminPageComponent } from './pages/medical-admin-page/medical-admin-page.component';
import { CenterUsersComponent } from './pages/center-users/center-users.component';
import { AppointmentReportComponent } from './pages/appointment-report/appointment-report.component';
import { MedAdminGuardService } from './medadm-guard.service';
import { UserGuardService } from './user-guard.service';
import { AdminGuardService } from './admin-guard.service';
import { SharedGuardService } from './shared-guard.service';

const routes: Routes = [
  // Homepage and medical centers page
  { path: '', component: HomepageComponent },
  { path: 'medical-centers', component: MedicalCentersComponent },
  // Profile pages for different users
  { path: 'user-profile', component: UserProfileComponent,canActivate: [UserGuardService] },
  { path: 'medical-center-profile', component: MedicalcenterProfileComponent, canActivate: [MedAdminGuardService] },
  { path: 'medical-admin-page', component: MedicalAdminPageComponent, canActivate: [MedAdminGuardService] },
  { path: 'appointment-report', component: AppointmentReportComponent, canActivate: [MedAdminGuardService] },
  { path: 'center-users', component: CenterUsersComponent, canActivate: [MedAdminGuardService] },
  { path: 'medical-admin-profile', component: MedicalAdminProfileComponent, canActivate: [MedAdminGuardService] },
  { path: 'sysadmin', component: SystemadminProfileComponent, canActivate: [AdminGuardService] },
  // Registration page and login page
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  // Donation pages
  { path: 'donation-form', component: DonationFormComponent,canActivate: [UserGuardService] },
  { path: 'blood-donation-page', component: BloodDonationPageComponent,canActivate: [UserGuardService] },
  // Appointment and schedule pages
  { path: 'my-appointments', component: MyAppointmentsComponent,canActivate: [UserGuardService] },
  // TODO: New my-appointments page for MEDICAL_STAFF
  { path: 'make-appointment', component: MakeAppointmentComponent,  canActivate: [AdminGuardService]},
  
  { path: 'create-appointment', component: AppointmentCreationComponent, canActivate: [MedAdminGuardService] },
  {
    path: 'medical-center-schedule',
    component: MedicalcenterScheduleComponent, canActivate: [SharedGuardService]
  },
  // Sysadmin pages
  { path: 'new-center', component: CenterRegistrationComponent,  canActivate: [AdminGuardService] },
  { path: 'register-sysadmin', component: SystemadminRegisterComponent,  canActivate: [AdminGuardService] },
  { path: 'admins', component: SysadminListComponent,  canActivate: [AdminGuardService] },
  { path: 'sysadmin-centers', component: SysadminCenterListComponent,  canActivate: [AdminGuardService] },
  // Other pages
  { path: 'search-users', component: UserSearchComponent, canActivate: [SharedGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
