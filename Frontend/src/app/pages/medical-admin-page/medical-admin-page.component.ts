import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medical-admin-page',
  templateUrl: './medical-admin-page.component.html',
  styleUrls: ['./medical-admin-page.component.css']
})
export class MedicalAdminPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  centerUsers(){
    this.router.navigate(['/center-users'])
  }
  calendar(){
    
  }
  addApointment(){
    
  }
  profile(){
    this.router.navigate(['/medical-admin-profile'])
  }
  appointments(){
    
  }

  medicalcenter()
  {
    this.router.navigate(['/medical-center-profile'])
  }

}
