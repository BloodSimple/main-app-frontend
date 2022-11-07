import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MedicalCentersComponent } from './pages/medical-centers/medical-centers.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path:'profile', component: UserProfileComponent },
  { path:'medical-centers', component: MedicalCentersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
