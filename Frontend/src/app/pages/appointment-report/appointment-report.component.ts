import { Component, OnInit } from '@angular/core';
import { MedicalCenterService } from 'src/app/service/medicalCenter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-report',
  templateUrl: './appointment-report.component.html',
  styleUrls: ['./appointment-report.component.css']
})
export class AppointmentReportComponent implements OnInit {

  bloodTypes: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];
  selectedBloodType: string = 'A+';
  doctorNote: string = '';
  bloodAmount: number = 400;

  handTypes: string[] = ['left-hand', 'right-hand'];
  selectedHand: string = 'right-hand';

  coppsulf: string = '';
  coppsulfNormal: string = '';
  coppsulfLow: string = '';
  hemoometer: string = '';
  readValue: string = '';
  lungs: string = '';
  heart: string = '';
  ta: string = '';
  tt: string = '';
  tv: string = '';
  refusalReason: string = '';

  sbag150: number = 0;
  sbag400: number = 0;
  sbag600: number = 0;
  dbag150: number = 0;
  dbag400: number = 0;
  dbag600: number = 0;
  tbag150: number = 0;
  tbag400: number = 0;
  tbag600: number = 0;
  bloodLancet: number = 0;



  appointmentId: number = -1;
  medicalCenterId: number = -1;


  conditions: boolean = false;
  errorText: string = "";

  constructor(private medicalService: MedicalCenterService,  public router: Router) { 

    console.log("Sacuvan id za pocetak appointmenta je:")
    let astr = localStorage.getItem('idForStartAppointment');
    this.appointmentId = parseInt(astr||"-2");

    console.log(astr);
    console.log(this.appointmentId);

    let medID = localStorage.getItem('idForMedicalCenter');
    this.medicalCenterId = parseInt(medID||"-1")

    //  /appointment-condition-check

    this.medicalService.appointmentConditionCheck(this.appointmentId).subscribe((response) => {

      if(response == "OK"){
        alert("Loaded conditions.")
      }
      else {
        this.errorText = response;
        alert(response);
        this.conditions = true;
      }
    });

  }


  sendReport() : void {
    // this.appointmentId = this.medicalService.getAppointmentId();
    // this.medicalCenterId = this.medicalService.getMedicalCenterId();

    console.log("send report")
    console.log(this.appointmentId)
    console.log(this.medicalCenterId)

    const CreateReportDTO = {
      appointmentId: this.appointmentId,
      medicalCenterId: this.medicalCenterId,
      bloodAmount: this.bloodAmount,
      doctorNote: this.doctorNote,
      bloodType: this.selectedBloodType,
      puncture_site: this.selectedHand,
      coppsulf: this.coppsulf,
      coppsulfNormal: this.coppsulfNormal,
      coppsulfLow: this.coppsulfLow,
      hemoometer: this.hemoometer,
      readValue: this.readValue,
      lungs: this.lungs,
      heart: this.heart,
      ta: this.ta,
      tt: this.tt,
      tv: this.tv,
      refusalReason: this.refusalReason,
      sbag150: this.sbag150,
      sbag400: this.sbag400,
      sbag600: this.sbag600,
      dbag150: this.dbag150,
      dbag400: this.dbag400,
      dbag600: this.dbag600,
      tbag150: this.tbag150,
      tbag400: this.tbag400,
      tbag600: this.tbag600,
      bloodLancet: this.bloodLancet  

    };
    
      this.medicalService.updateAppointmentReport(CreateReportDTO).subscribe((response) => {

        if(response == "OK"){
          alert("Report created.")
          this.router.navigate(['/medical-center-schedule']);
        }
        else {
          alert(response);
        }
      });

  }


  userMissApointment() : void {
    // this.appointmentId = this.medicalService.getAppointmentId();
    console.log("User miss app")
    console.log(this.appointmentId)
    
    const MissAppointmentDTO = {
      appointmentId: this.appointmentId
    };
    
      this.medicalService.userMissAppointmentReport(MissAppointmentDTO).subscribe((response) => {

        if(response == "OK"){
          alert("Appointment set to missed.")
          this.router.navigate(['/medical-center-schedule']);
        }
        else {
          alert(response);
        }
      });

  }

  conditionsUnfulfilled() : void {
    // this.appointmentId = this.medicalService.getAppointmentId();
    console.log("conditions unful...")
    console.log(this.appointmentId)

    
    const MissAppointmentDTO = {
      appointmentId: this.appointmentId
    };
    
      this.medicalService.conditionsUnfulfilledAppointmentReport(MissAppointmentDTO).subscribe((response) => {

        if(response == "OK"){
          alert("Appointment set to conditions unfulfilled.")
          this.router.navigate(['/medical-center-schedule']);
        }
        else {
          alert(response);
        }

      });

  }

  ngOnInit(): void {
  }

}
