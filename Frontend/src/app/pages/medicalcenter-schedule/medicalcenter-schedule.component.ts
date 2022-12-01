import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { CallbackFunction, EventRenderedArgs, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { AppointmentDTO } from 'src/app/systemadmin-utils/AppointmentDTO';
import { AppointmentScheduleDTO } from 'src/app/systemadmin-utils/AppointmentScheduleDTO';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';
import { timeInterval } from 'rxjs';
import { async } from '@angular/core/testing';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';




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

  constructor(
    public service:SystemadminServiceService,
    public  router: Router
    ) {
      this.currentDate = new Date().toISOString().slice(0, 10);
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
    // this.service.createAppointment(this.appointments).subscribe(data=>{

    //   console.log(data);
    // });
    this.displayStyle = "none";
  }
}


