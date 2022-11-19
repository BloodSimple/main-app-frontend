import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodDonationPageComponent } from './blood-donation-page.component';

describe('BloodDonationPageComponent', () => {
  let component: BloodDonationPageComponent;
  let fixture: ComponentFixture<BloodDonationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodDonationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodDonationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
