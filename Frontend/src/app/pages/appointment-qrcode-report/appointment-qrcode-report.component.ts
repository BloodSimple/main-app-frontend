import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iif, map, Observable, of, switchMap } from 'rxjs';
import { AppointmentDTO } from 'src/app/systemadmin-utils/AppointmentDTO';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
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

  //
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
}
