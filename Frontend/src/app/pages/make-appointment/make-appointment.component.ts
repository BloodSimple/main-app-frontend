import { Component, OnInit } from '@angular/core';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
import { formatDate } from '@angular/common';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserModel } from 'src/app/model/user';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

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

  user = new UserModel();
  activeUser: LoginResponse = new LoginResponse();

  dateAndTime: string ='';
  
  constructor(
    private medicalCenterService: MedicalCenterService,
    private authenticationService: AuthenticationService,
    private userService: UserService) {
    this.currentDate = new Date().toISOString().slice(0, 10);
   }
  ngOnInit(): void {   
    this.activeUser = this.authenticationService.getCurrentUser();
  }

  search(){                           //Give user only medical center with free appointments


    const format = "yyyy-MM-ddTHH:mm:ss";
    let startTime = new Date(this.startDate);
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
   
   const startDateTime = formatDate(startTime, format, "en-US")
   console.log(startDateTime);
   this.dateAndTime = startDateTime;
    this.medicalCenterService
    .getMedicalCenterWithAppointments(startDateTime).subscribe((medicalCenters: MedicalCenterModel[]) => {
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

  schedule(medicalCenterId: any, startTime: any, personalId: any){
    console.log(medicalCenterId);
    console.log(startTime);
    console.log(personalId);
   
    this.userService.scheduleAppointment(medicalCenterId, startTime, personalId).subscribe((appointment: any) => {
      console.log(appointment);
      if(appointment.response == "Six months haven't passed since your last blood donation."){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: "Six months haven't passed since your last blood donation.",
          background: '#1e2126',
          color: '#c4c4c4',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
         });
      }else if(appointment.response == "You should take questionnaire before blood donation."){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'You should take questionnaire before blood donation.',
          background: '#1e2126',
          color: '#c4c4c4',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
         });
      }else if(appointment.response == "You should take questionnaire again..."){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'You should take questionnaire again...',
          background: '#1e2126',
          color: '#c4c4c4',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
         });
      }else if(appointment.response == "You have cancelled this appointment, you can't schedule it again."){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: "You have cancelled this appointment, you can't schedule it again.",
          background: '#1e2126',
          color: '#c4c4c4',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
         });
      }else {
        Swal.fire({
          icon: 'success',
          title: 'Yippee!',
          text: 'Appointment reservation successful!',
          background: '#1e2126',
          color: '#c4c4c4',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
      }
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Yippee!',
      //   text: 'Appointment reservation successful!',
      //   background: '#1e2126',
      //   color: '#c4c4c4',
      //   showCancelButton: false,
      //   showConfirmButton: false,
      //   timer: 2000,
      // });
    })

  }
}