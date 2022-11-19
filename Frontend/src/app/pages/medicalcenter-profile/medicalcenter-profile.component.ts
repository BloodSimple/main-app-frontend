import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';

@Component({
  selector: 'app-medicalcenter-profile',
  templateUrl: './medicalcenter-profile.component.html',
  styleUrls: ['./medicalcenter-profile.component.css']
})
export class MedicalcenterProfileComponent implements OnInit {

  constructor(private medicalService: MedicalCenterService) { }

  medicalCenter = new MedicalCenterModel();

  ngOnInit(): void {

    this.medicalService.getMedicalCenterById(1).subscribe((response)  => {
      // console.log(response);
      console.log(JSON.stringify(response));
      this.medicalCenter = response;
      
  });
  }

  save() : void {

    this.medicalService.updateCenter(this.medicalCenter).subscribe((response) => {      
      this.medicalCenter = response;
      console.log("ide novi centar");    
      console.log(this.medicalCenter);

      alert("Center uppdated.")
    });

  }

  loadMedicalCenterAdministators() : void {
    
  }

}
