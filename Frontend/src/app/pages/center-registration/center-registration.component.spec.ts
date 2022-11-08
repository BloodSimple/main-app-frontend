import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterRegistrationComponent } from './center-registration.component';

describe('CenterRegistrationComponent', () => {
  let component: CenterRegistrationComponent;
  let fixture: ComponentFixture<CenterRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
