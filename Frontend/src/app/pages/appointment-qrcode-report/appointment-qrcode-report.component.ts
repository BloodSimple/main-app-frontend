import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iif, map, Observable, of, switchMap } from 'rxjs';
import { AppointmentDTO } from 'src/app/systemadmin-utils/AppointmentDTO';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
import { ReportDTO } from 'src/app/systemadmin-utils/reportDTO';
import { ReportRequest } from 'src/app/systemadmin-utils/ReportRequest';
@Component({
  selector: 'app-appointment-qrcode-report',
  templateUrl: './appointment-qrcode-report.component.html',
  styleUrls: ['./appointment-qrcode-report.component.css'],
  
})
export class AppointmentQrcodeReportComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  uploaded = false;
  loading: boolean = false; // Flag variable
  data : any
  proceed = false;
  appointment:any
  //report properties
  public bloodType:String = 'A'
  public doctorNote:String=''
  public copperSulphate : number = 0
  public hemoglobineMeter : number = 0
  public approved : String = 'true';
  approvedBool = true
  public denialReason : String = ''
  public leftHand = 'true'
  public startHour : number = 0
  public startMinutes : number = 0
  public endHour : number = 0
  public endMinutes : number = 0  
  public interuptionReason : String = ''
  //equipment
  public bloodBags:number = 0
  public syringes : number = 0
  public needles : number = 0
//
  public amountOfBlood : number = 0
  //
  public report: ReportDTO|undefined
  file = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  constructor(   
    public service:SystemadminServiceService,
    public  router: Router,
  ) { }

    ngOnInit(): void {
      console.log(this.bloodType)
    }
  
    // On file Select
    onChange(event:any) {
        this.file = event.target.files[0];
    }
  

 async readqr(){
   this.service.upload(this.file).subscribe(
    () => {    
      this.uploaded = true
   this.service.readQR(this.file.name).subscribe(
   (res)=>{
    this.data = res
    console.log(res)
   }
   )  
    }
   )
   //await this.findAppointment(this.data)
   //this.proceed = true

}

async findAppointment(data:any){
  this.service.proceedToReport(data).subscribe((res:AppointmentDTO)=>{
    this.appointment = res;
    this.proceed = true
    console.log(res);
    console.log(this.appointment)
  });
 
}
test(){
  console.log(this.bloodType)
}

onSubmit(){

}
notApproved(){
  this.approved='false'
  this.approvedBool = false
}


generateReport(){
 this.report = new ReportDTO()
 let app = new AppointmentDTO(this.appointment.startTime, 0, this.appointment.user, this.appointment.duration, this.appointment.medicalCenter, 
  this.appointment.id)
  this.report.appointment = app
  if(this.approved == 'true')  
  this.report.approved = true
  else
    this.report.approved = false
 this.report.bloodType = this.bloodType
 this.report.copperSulphate = this.copperSulphate
 this.report.hemoglobinometer = this.hemoglobineMeter
 this.report.denialReason = this.denialReason
 this.report.doctorNote = this.doctorNote
 if (this.leftHand == 'true')
  this.report.leftHand = true
  else 
    this.report.leftHand = false
 this.report.stopReason = this.interuptionReason
 this.report.startTime = new Date()
 this.report.startTime.setHours(this.startHour+1)
 this.report.startTime.setMinutes(this.startMinutes)
 this.report.endTime = new Date()
 this.report.endTime.setHours(this.endHour+1)
 this.report.endTime.setMinutes(this.endMinutes)
 let request = new ReportRequest()
 request.appointmentReport = this.report
 request.amountOfBlood = this.amountOfBlood/1000
 request.bags = this.bloodBags 
 request.syringes = this.syringes
 request.needles = this.needles
 request.bloodType = this.bloodType
 console.log(request)
this.service.putReport(request).subscribe(res => {
  console.log(res)
})
this.router.navigate(['/sysadmin']);
//this.endTime = new Date(new Date(this.startTime).getTime() +  a.duration*60000)
}
}
