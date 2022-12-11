import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iif, map, Observable, of, switchMap } from 'rxjs';
import { SystemadminServiceService } from 'src/app/systemadmin-utils/systemadmin.service';
@Component({
  selector: 'app-appointment-qrcode-report',
  templateUrl: './appointment-qrcode-report.component.html',
  styleUrls: ['./appointment-qrcode-report.component.css']
})
export class AppointmentQrcodeReportComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  uploaded = false;
  loading: boolean = false; // Flag variable
  data : any
  file = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  constructor(   
    public service:SystemadminServiceService,
    public  router: Router,
  ) { }

    ngOnInit(): void {
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
}


}
