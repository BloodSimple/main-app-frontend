import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SystemadminProfileComponent } from './pages/systemadmin-profile/systemadmin-profile.component';
import { CenterRegistrationComponent } from './pages/center-registration/center-registration.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MyFilterPipe } from './systemadmin-utils/myFilterPipe';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { MedicalCentersComponent } from './pages/medical-centers/medical-centers.component';
import { SearchPipe } from './pages/medical-centers/search.pipe';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { MedicalcenterProfileComponent } from './pages/medicalcenter-profile/medicalcenter-profile.component';
import { SystemadminRegisterComponent } from './pages/systemadmin-register/systemadmin-register.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicalAdminProfileComponent } from './pages/medical-admin-profile/medical-admin-profile.component';
import { AppointmentCreationComponent } from './pages/appointment-creation/appointment-creation.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BloodDonationPageComponent } from './pages/blood-donation-page/blood-donation-page.component';

@NgModule({
  declarations: [
    MyFilterPipe,
    AppComponent,
    HomepageComponent,
    SystemadminProfileComponent,
    CenterRegistrationComponent,
    UserSearchComponent,
    UserProfileComponent,
    MedicalCentersComponent,
    SearchPipe,
    MedicalcenterProfileComponent,
    SystemadminRegisterComponent,
    LoginComponent,
    MedicalAdminProfileComponent,
    AppointmentCreationComponent,
    RegistrationPageComponent,
    MedicalcenterProfileComponent,
    LoginPageComponent,
    BloodDonationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    Ng2SearchPipeModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
