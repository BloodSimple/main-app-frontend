import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcenterProfileComponent } from './medicalcenter-profile.component';

describe('MedicalcenterProfileComponent', () => {
  let component: MedicalcenterProfileComponent;
  let fixture: ComponentFixture<MedicalcenterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalcenterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalcenterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
