import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { CallbackFunction, EventRenderedArgs, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { AppointmentDTO } from 'src/app/systemadmin-utils/AppointmentDTO';
import { AppointmentScheduleDTO } from 'src/app/systemadmin-utils/AppointmentScheduleDTO';
import { UserDTO } from 'src/app/systemadmin-utils/UserDTO';
import { timeInterval } from 'rxjs';




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
  constructor(
    public service:SystemadminServiceService,
    public  router: Router,

    ) {}

    private eventData: DataManager = new DataManager({
      url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
      adaptor: new WebApiAdaptor,
      crossDomain: true
    })
    public eventObject : EventSettingsModel = {
      allowAdding:false, 
      allowEditing:false,
      allowDeleting:false
      
      // dataSource:[{
      //   Subject:'Test',
      //   StartTime: new Date(2022,10,16, 14,0),
      //   EndTime: new Date(2022, 10, 16, 16, 0)
      // }], 
      // fields: {
      //   subject: {name:'Subject', default:'Blood donation'},
      //   startTime: {name:'StartTime'},
      //   endTime: {name:'EndTime'},
        
      // }
    }

  ngOnInit(): void {
    this.service.viewSchedule().subscribe(data=>
      this.appointments=data)
      //this.init3(1)
    }



// init3(id : number):UserDTO[]{
//   // this.service.getUsersForAppointment(id).subscribe(data=>{
//   //   this.users$=data},
//   //   (err) => console.log(err))
//   //   this.users$.forEach((u)=>{
//   //     console.log(u.name)
//   //   }, )
   
//     //return this.users$
// }

 init2(){
        this.appointments.forEach((u) => {          
            this.schedule.push( new AppointmentScheduleDTO(u));          
          console.log(u)  
          })
          
          this.schedule.forEach((s) => {
            console.log(s)
          })
          this.eventObject={
            dataSource:this.schedule, 
            allowAdding:false, 
            allowEditing:false,
            allowDeleting:false,
            fields: {
              subject: { default:'Blood donation'},
              startTime: {name:'startTime'},
              endTime: {name:'endTime'},
              // description:{name:'medicalCenter'}
              
            }, 
            enableTooltip: true,
            // tooltipTemplate://'<div> ${users.name} </div> '+
            //                   '<table> <tr *ngFor="let u of users; let i = index"> ' +
            //                   '<td> {{u.name}}</td>' + 
            //                   '<td> {{u.surname}} </td> </tr> </table>'+
            //                   '<div> ${id} </div> '
          };
//         this.eventObject={
          // dataSource:this.schedule, 
          // allowAdding:false, 
          // allowEditing:true,
          // allowDeleting:false,
          // fields: {
          //   subject: { default:'Blood donation'},
          //   startTime: {name:'startTime'},
          //   endTime: {name:'endTime'},
          //   // description:{name:'medicalCenter'}
            
          // }, 
          
// }
        this.clickable=false
        
}

// public getCellContent(date: Date): string {
//   if (date.getMonth() === 9 && date.getDate() == 23) {  //mesec krece od 0
//     return '<div class="caption">Thanksgiving day</div>';
//   } else {
//     return '';
//   }
// }

// public onEventRendered(args: EventRenderedArgs): void {
//   const categoryColor: string = args.data['CategoryColor'] as string;
//   if (!args.element || !categoryColor) {
//     return;
//   }
//   if (this.view === 'Month') {
//     (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
//   } else {
//     args.element.style.backgroundColor = categoryColor;
//   }
// }


 }


