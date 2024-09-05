import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { EmployeeShowAttendanceComponent } from './componants/employee-show-attendance/employee-show-attendance.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAttendanceComponent } from './componants/add-attendance/add-attendance.component';
import { HrAttendacesViewComponent } from './componants/hr-attendaces-view/hr-attendaces-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, EmployeeShowAttendanceComponent, HttpClientModule, AddAttendanceComponent, HrAttendacesViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hr-system';
}
