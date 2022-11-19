import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemadminRegisterComponent } from './systemadmin-register.component';

describe('SystemadminRegisterComponent', () => {
  let component: SystemadminRegisterComponent;
  let fixture: ComponentFixture<SystemadminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemadminRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemadminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
