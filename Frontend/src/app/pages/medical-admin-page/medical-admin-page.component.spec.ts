import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAdminPageComponent } from './medical-admin-page.component';

describe('MedicalAdminPageComponent', () => {
  let component: MedicalAdminPageComponent;
  let fixture: ComponentFixture<MedicalAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
