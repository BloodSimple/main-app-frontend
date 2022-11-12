import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCentersComponent } from './medical-centers.component';

describe('MedicalCentersComponent', () => {
  let component: MedicalCentersComponent;
  let fixture: ComponentFixture<MedicalCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalCentersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
