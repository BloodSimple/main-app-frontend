import { Component, Inject, OnInit, ɵisListLikeIterable } from '@angular/core';
import { Router } from '@angular/router';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { CallbackFunction, EventRenderedArgs, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { AppointmentDTO } from 'src/app/systemadmin-utils/AppointmentDTO';
import { AppointmentScheduleDTO } from 'src/app/systemadmin-utils/AppointmentScheduleDTO';

import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
import { formatDate } from '@angular/common';
import { MedicalCenterDTO } from 'src/app/systemadmin-utils/MedicalCenterDTO';
import { UserModel } from 'src/app/model/user';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';


interface hour {
  id?: number,
  name?: string
}

// interface duration {
//   id?: number,
//   name?: number
// }

@Component({
  selector: 'app-medicalcenter-schedule',
  //template:'<ejs-schedule height="70%" width="100%" [eventSettings]="eventObject" > <e-resources> <e-resource> </e-resource> </e-resources> </ejs-schedule>',

  templateUrl: './medicalcenter-schedule.component.html',
 
})
export class MedicalcenterScheduleComponent implements OnInit {
  public appointments:AppointmentDTO[]= []
  public schedule:AppointmentScheduleDTO[] = []
  public clickable = true
  public view : View = 'Month'
  public views: View[] = ["Day", "Week", "Month"]
  public statusData: string[] = ['New', 'Requested', 'Confirmed'];

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

  duration: number = 10;
  // durations : duration[] = [
  //   {id: 1, name:10},
  //   {id: 2, name:15},
  //   {id: 3, name:20},
  //   {id: 4, name:30},
  //   {id: 5, name:45},
  //   {id: 6, name:50}
  // ];

  selectedHour?: hour;
  // selectedDuration?: duration;

  startDate = Date();
  // medicalCenter = new MedicalCenterDTO(
  //   id: 1,

  // );

  medicalStaff: UserModel[] = [];

  constructor(
    public service:SystemadminServiceService,
    public  router: Router,
    public medicalCenterService: MedicalCenterService
    ) {
      this.currentDate = new Date().toISOString().slice(0, 10);
    //   this.medicalCenterService.getMedicalCenterDTOById(1).subscribe((response)  => {
    //     // console.log(response);
    //     console.log(JSON.stringify(response));
    //     this.medicalCenter = response;
        
    // });
    }

    private eventData: DataManager = new DataManager({
      url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
      adaptor: new WebApiAdaptor,
      crossDomain: true
    })
    public eventObject : EventSettingsModel = {
      allowAdding:false, 
      allowEditing:false,
      allowDeleting:false
    }

  async ngOnInit(): Promise<any> {
  
    this.service.viewSchedule().subscribe(data=>{
      this.appointments=data;
      console.log('drugo');
      console.log(data);
      console.log(this.appointments);
    });

      //this.init3(1)
      //this.init2()
      // let sch : AppointmentScheduleDTO[] = [];
      //   app.forEach((u) => {          
      //     sch.push( new AppointmentScheduleDTO(u));          
      //     console.log(u)  
      //     })
      //     let obj : EventSettingsModel = {
      //       dataSource:this.schedule, 
      //       allowAdding:false, 
      //       allowEditing:false,
      //       allowDeleting:false,
      //       fields: {
      //         subject: { default:'Blood donation'},
      //         startTime: {name:'startTime'},
      //         endTime: {name:'endTime'},             
      //       }, 
      //       enableTooltip: true,
      //     }
      //     this.eventObject  = obj
      //     this.appointments = app
      //     this.schedule = sch 
      //   this.clickable=false
    }

 init2(){
        let app : AppointmentDTO[] = []
        this.appointments.forEach((u) => {          
          this.schedule.push( new AppointmentScheduleDTO(u));          
          console.log(u)  
          })
          this.schedule.forEach((s) => {
            console.log(s)
          })
          this.eventObject  = {
            dataSource:this.schedule, 
            allowAdding:false, 
            allowEditing:false,
            allowDeleting:false,
            fields: {
              subject: { default:'Blood donation'},
              startTime: {name:'startTime'},
              endTime: {name:'endTime'},             
            }, 
            enableTooltip: true,
          }
        this.clickable=false
        
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  define() {
   
    const format = "yyyy-MM-ddTHH:mm:ss";
    const startTime = new Date(this.startDate);
    console.log(startTime);

    switch ( this.selectedHour ) {
      case "07":
        startTime.setHours(8);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "08":
        startTime.setHours(9);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "09":
        startTime.setHours(10);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "10":
        startTime.setHours(11);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "11":
        startTime.setHours(12);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "12":
        startTime.setHours(13);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      case "13":
        startTime.setHours(14);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        break;
      default: 
            break;
   }

    const body = {
      startTime: formatDate(startTime, format, "en-US"),
      // duration: this.selectedDuration?.name,
      duration: this.duration,
      medicalCenterId: 1
    }

    console.log(body);
    const app= new AppointmentDTO(new Date(body.startTime), new UserModel(), body.duration, 1, this.medicalStaff);

     this.service.createAppointment(app).subscribe(data=>{

      console.log(data);
    });
    this.displayStyle = "none";
  }
}


