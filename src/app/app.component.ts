import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeShowAttendanceComponent } from './componants/employee-show-attendance/employee-show-attendance.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAttendanceComponent } from './componants/add-attendance/add-attendance.component';
import { HrAttendacesViewComponent } from './componants/hr-attendaces-view/hr-attendaces-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeShowAttendanceComponent, HttpClientModule, AddAttendanceComponent, HrAttendacesViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hr-system';
}
