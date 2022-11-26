import { Component, OnInit } from '@angular/core';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit {

  medicalCenter = new MedicalCenterModel();
  medicalCenters: MedicalCenterModel[] = [];
  currentDate = new Date();
  dateFormat = this.currentDate.getFullYear().toString() + '-' + ("0" + (this.currentDate.getMonth() + 1)).slice(-2) + '-' + ("0" + (this.currentDate.getDate())).slice(-2) + 'T' + this.currentDate.toTimeString().slice(0,8);
  constructor(private medicalCenterService: MedicalCenterService) { }

  ngOnInit(): void {   
    console.log(this.dateFormat);               
  }

  search(){                           //Give user only medical center with free appointments
    this.medicalCenterService
    .getMedicalCenters()
    .subscribe((medicalCenters: MedicalCenterModel[]) => {
      this.medicalCenters = medicalCenters;
      console.log(this.medicalCenters);
    });
  }
  sortByRatingDesc() {
    this.medicalCenters.sort((a, b) => {
      return b.grade - a.grade;
    });
  }
  sortByRatingAsc() {
    this.medicalCenters.sort((a, b) => {
      return a.grade - b.grade;
    });
  }
}
