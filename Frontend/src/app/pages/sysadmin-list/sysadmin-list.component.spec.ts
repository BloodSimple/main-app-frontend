import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysadminListComponent } from './sysadmin-list.component';

describe('SysadminListComponent', () => {
  let component: SysadminListComponent;
  let fixture: ComponentFixture<SysadminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysadminListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysadminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
