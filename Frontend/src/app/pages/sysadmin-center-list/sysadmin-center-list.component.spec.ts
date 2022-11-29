import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysadminCenterListComponent } from './sysadmin-center-list.component';

describe('SysadminCenterListComponent', () => {
  let component: SysadminCenterListComponent;
  let fixture: ComponentFixture<SysadminCenterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysadminCenterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysadminCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
