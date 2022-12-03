import { Component, OnInit } from '@angular/core';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';

interface hour {
  id?: number,
  name?: string
}

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})

export class MakeAppointmentComponent implements OnInit {

  public medicalCenter = new MedicalCenterModel();
  public medicalCenters: MedicalCenterModel[] = [];
  // public currentDate = new Date();

  currentDate: string;

  hours : hour[] = [
    {id: 1, name:"07"},
    {id: 2, name:"08"},
    {id: 3, name:"09"},
    {id: 4, name:"10"},
    {id: 5, name:"11"},
    {id: 6, name:"12"},
    {id: 7, name:"13"}
  ];

  selectedHour?: hour;
  startDate = Date();
  // dateFormat = this.currentDate.getFullYear().toString() + '-' + ("0" + (this.currentDate.getMonth() + 1)).slice(-2) + '-' + ("0" + (this.currentDate.getDate())).slice(-2) + 'T' + this.currentDate.toTimeString().slice(0,8);
  constructor(private medicalCenterService: MedicalCenterService) {
    this.currentDate = new Date().toISOString().slice(0, 10);
   }

  ngOnInit(): void {   
    // console.log(this.dateFormat);   
       
  }

  search(){                           //Give user only medical center with free appointments

    const format = "yyyy-MM-ddTHH:mm:ss";
    const startTime = new Date(this.startDate);
    console.log(startTime);
    switch ( this.selectedHour ) {
      case "07":
        startTime.setHours(7);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "08":
        startTime.setHours(8);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "09":
        startTime.setHours(9);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "10":
        startTime.setHours(10);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "11":
        startTime.setHours(11);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "12":
        startTime.setHours(12);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "13":
        startTime.setHours(13);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      default: 
            break;
   }

   console.log(startTime);
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

  displayStyle = "none";

  openPopupQuestionnaire() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}
