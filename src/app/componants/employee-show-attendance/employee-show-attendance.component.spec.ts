import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeShowAttendanceComponent } from './employee-show-attendance.component';

describe('EmployeeShowAttendanceComponent', () => {
  let component: EmployeeShowAttendanceComponent;
  let fixture: ComponentFixture<EmployeeShowAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeShowAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeShowAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
