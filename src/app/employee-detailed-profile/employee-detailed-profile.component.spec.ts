import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailedProfileComponent } from './employee-detailed-profile.component';

describe('EmployeeDetailedProfileComponent', () => {
  let component: EmployeeDetailedProfileComponent;
  let fixture: ComponentFixture<EmployeeDetailedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDetailedProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDetailedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
