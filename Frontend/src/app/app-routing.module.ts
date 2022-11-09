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
  {path:'new_center', component :CenterRegistrationComponent},
  {path:'search_users', component:UserSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
