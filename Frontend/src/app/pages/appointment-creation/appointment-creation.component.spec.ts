import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCreationComponent } from './appointment-creation.component';

describe('AppointmentCreationComponent', () => {
  let component: AppointmentCreationComponent;
  let fixture: ComponentFixture<AppointmentCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
