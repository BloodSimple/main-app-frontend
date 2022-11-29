import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcenterScheduleComponent } from './medicalcenter-schedule.component';

describe('MedicalcenterScheduleComponent', () => {
  let component: MedicalcenterScheduleComponent;
  let fixture: ComponentFixture<MedicalcenterScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalcenterScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalcenterScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
