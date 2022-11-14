import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CenterRegistrationComponent } from './pages/center-registration/center-registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SystemadminProfileComponent } from './pages/systemadmin-profile/systemadmin-profile.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  {path:'sysadmin', component: SystemadminProfileComponent},
  {path:'new-center', component :CenterRegistrationComponent},
  {path:'search-users', component:UserSearchComponent},
  {path:'register-sysadmin', component:SystemadminRegisterComponent},
  { path:'', component: HomepageComponent },
  { path:'profile', component: UserProfileComponent },
  { path:'medical-centers', component: MedicalCentersComponent},
  { path:'medical-center-profile', component: MedicalcenterProfileComponent}
]
import { MedicalCentersComponent } from './pages/medical-centers/medical-centers.component';
import { MedicalcenterProfileComponent } from './pages/medicalcenter-profile/medicalcenter-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SystemadminRegisterComponent } from './pages/systemadmin-register/systemadmin-register.component';



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
