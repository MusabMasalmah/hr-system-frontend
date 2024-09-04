import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaveRequestDialogComponent } from './update-leave-request-dialog.component';

describe('UpdateLeaveRequestDialogComponent', () => {
  let component: UpdateLeaveRequestDialogComponent;
  let fixture: ComponentFixture<UpdateLeaveRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLeaveRequestDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLeaveRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
