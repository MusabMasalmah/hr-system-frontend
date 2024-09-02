import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttendanceModalComponent } from './edit-attendance-modal.component';

describe('EditAttendanceModalComponent', () => {
  let component: EditAttendanceModalComponent;
  let fixture: ComponentFixture<EditAttendanceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAttendanceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAttendanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
