import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemadminProfileComponent } from './systemadmin-profile.component';

describe('SystemadminProfileComponent', () => {
  let component: SystemadminProfileComponent;
  let fixture: ComponentFixture<SystemadminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemadminProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemadminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
