import { Component } from '@angular/core';
import { AttendanceService } from '../../services/AttendanceService/attendance.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-attendance',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-attendance.component.html',
  styleUrl: './add-attendance.component.css'
})
export class AddAttendanceComponent {
  startTime: string = '';
  endTime: string = '';

  constructor(private attendanceService: AttendanceService) {}

  onSubmit() {
    if (this.startTime && this.endTime) {
      
      
      this.attendanceService.saveAttendance(this.startTime, this.endTime).subscribe({
        next: (response) => {
          alert('Attendance saved successfully!');
          this.startTime = '';
          this.endTime = '';
        },
        error: (error) => {
          console.error('Error saving attendance', error);
          this.startTime = '';
          this.endTime = '';
          // Error handling is managed in the service method
        }
      });
    } else {
      alert('Please fill in both start and end time.');
    }
  }
}
