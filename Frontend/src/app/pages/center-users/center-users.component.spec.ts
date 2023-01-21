import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterUsersComponent } from './center-users.component';

describe('CenterUsersComponent', () => {
  let component: CenterUsersComponent;
  let fixture: ComponentFixture<CenterUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
