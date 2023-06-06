import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
