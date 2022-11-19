import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAdminProfileComponent } from './medical-admin-profile.component';

describe('MedicalAdminProfileComponent', () => {
  let component: MedicalAdminProfileComponent;
  let fixture: ComponentFixture<MedicalAdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAdminProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
