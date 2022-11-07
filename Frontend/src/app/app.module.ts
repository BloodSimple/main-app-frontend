import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicalCentersComponent } from './pages/medical-centers/medical-centers.component';
import { SearchPipe } from './pages/medical-centers/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserProfileComponent,
    MedicalCentersComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
