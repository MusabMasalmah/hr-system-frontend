import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHrLeaveRequestsComponent } from './employee-hr-leave-requests.component';

describe('EmployeeHrLeaveRequestsComponent', () => {
  let component: EmployeeHrLeaveRequestsComponent;
  let fixture: ComponentFixture<EmployeeHrLeaveRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeHrLeaveRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeHrLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
