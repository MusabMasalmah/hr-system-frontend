import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveRequestsComponent } from './employee-leave-requests.component';

describe('EmployeeLeaveRequestsComponent', () => {
  let component: EmployeeLeaveRequestsComponent;
  let fixture: ComponentFixture<EmployeeLeaveRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeLeaveRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
