import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAttendacesViewComponent } from './hr-attendaces-view.component';

describe('HrAttendacesViewComponent', () => {
  let component: HrAttendacesViewComponent;
  let fixture: ComponentFixture<HrAttendacesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrAttendacesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrAttendacesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
