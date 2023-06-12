//main page for medical admin so he can see all the other pages

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
@Component({
  selector: 'app-medical-admin-page',
  templateUrl: './medical-admin-page.component.html',
  styleUrls: ['./medical-admin-page.component.css']
})
export class MedicalAdminPageComponent implements OnInit {

  constructor(private router: Router, private mcService: MedicalCenterService) { 

    ///getCenterMedWorks


  }

  ngOnInit(): void {
    var lsUser = localStorage.getItem('currentUser');
    
    const object = JSON.parse(lsUser || ' ');
    
    this.mcService.getCenterMedWorks(object.email).subscribe(response => {
        console.log("Getting med center for medical admin page")
        // response.id
        localStorage.setItem('idForMedicalCenter', response.id );
        console.log(JSON.stringify(response));
    })

  }

  centerUsers(){
    this.router.navigate(['/center-users'])
  }
  calendar(){
    this.router.navigate(['/medical-center-schedule'])
  }
  addApointment(){
    this.router.navigate(['/create-appointment'])
  }
  profile(){
    this.router.navigate(['/medical-admin-profile'])
  }
  appointments(){
    this.router.navigate(['/medical-center-schedule'])
  }

  medicalcenter()
  {
    this.router.navigate(['/medical-center-profile'])
  }

  searchUsers()
  {
    this.router.navigate(['/search-users'])
  }

}
