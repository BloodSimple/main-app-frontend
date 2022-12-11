import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentQrcodeReportComponent } from './appointment-qrcode-report.component';

describe('AppointmentQrcodeReportComponent', () => {
  let component: AppointmentQrcodeReportComponent;
  let fixture: ComponentFixture<AppointmentQrcodeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentQrcodeReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentQrcodeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
