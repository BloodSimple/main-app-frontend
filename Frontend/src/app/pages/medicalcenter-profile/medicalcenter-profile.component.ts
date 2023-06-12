import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { MedicalCenterModel } from 'src/app/model/medicalCenter';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
import { Router } from '@angular/router';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { CallbackFunction, EventRenderedArgs, EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { AppointmentDTO } from 'src/app/systemadmin-utils/AppointmentDTO';
import { AppointmentScheduleDTO } from 'src/app/systemadmin-utils/AppointmentScheduleDTO';
import { formatDate } from '@angular/common';
import { UserModel } from 'src/app/model/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicalcenter-profile',
  templateUrl: './medicalcenter-profile.component.html',
  styleUrls: ['./medicalcenter-profile.component.css']
})
export class MedicalcenterProfileComponent implements OnInit {

  constructor(private medicalService: MedicalCenterService, public service:SystemadminServiceService,  public router: Router) {

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


  medicalCenter = new MedicalCenterModel();
  medicalStore: any;
  public appointments:AppointmentDTO[]= []
  public schedule:AppointmentScheduleDTO[] = []
  public clickable = true
  public view : View = 'Month'
  public views: View[] = ["Day", "Week", "Month"]
  public statusData: string[] = ['New', 'Requested', 'Confirmed'];


  public medicalCenterId: any; 

  async ngOnInit(): Promise<any>{

    let medID = localStorage.getItem('idForMedicalCenter');
    this.medicalCenterId = parseInt(medID||"-1")

    this.medicalService.getMedicalCenterById(this.medicalCenterId).subscribe((response)  => {
      // console.log(response);
      console.log(JSON.stringify(response));
      this.medicalCenter = response;
      
  });

    this.medicalService.getMedicalCenterStoreById(this.medicalCenterId).subscribe((response)  => {
      console.log(response);
      console.log(JSON.stringify(response));
      this.medicalStore = response;
    
    });

    // this.service.viewSchedule().subscribe(data=>{
    //   this.appointments=data;
    //   console.log('drugo');
    //   console.log(data);
    //   console.log(this.appointments);
    //   this.init2()
    // });
    this.medicalService.viewSchedule().subscribe(data=>{
        this.appointments=data;
        console.log('drugo');
        console.log(data);
        console.log(this.appointments);
        this.init2()
      });
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

  save() : void {

    this.medicalService.updateCenter(this.medicalCenter).subscribe((response) => {      
      this.medicalCenter = response;
      console.log("ide novi centar");    
      console.log(this.medicalCenter);

      alert("Center uppdated.")
    });

  }

  createFreeAppointment() : void {
    this.router.navigate(['/create-appointment'])
  }

  loadMedicalCenterAdministators() : void {
    
  }

}
