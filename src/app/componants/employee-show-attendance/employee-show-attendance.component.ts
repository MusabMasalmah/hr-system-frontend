import { Component } from '@angular/core';
import { Attendance } from '../../models/Attendance';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceService } from '../../services/AttendanceService/attendance.service';

@Component({
  selector: 'app-employee-show-attendance',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './employee-show-attendance.component.html',
  styleUrl: './employee-show-attendance.component.css'
})
export class EmployeeShowAttendanceComponent {
  attendances: any[] = [];
  page: number = 0;
  size: number = 5;
  totalPages: number = 0;
  employeeId: number = 2; // Set as needed
  searchDate: string = '';
  totalHoursWorked: number = 0;
  progress: number = 0; // Percentage of progress
  progressClass: string = 'low'; // Default class

  public readonly TOTAL_MONTHLY_HOURS = 160;

  constructor(private attendanceService: AttendanceService) {
    this.updateProgress();
  }

  updateProgress() {
    // Calculate progress percentage
    this.progress = (this.totalHoursWorked / this.TOTAL_MONTHLY_HOURS) * 100;

    // Determine progress class based on percentage
    if (this.progress < 33) {
      this.progressClass = 'low';
    } else if (this.progress < 66) {
      this.progressClass = 'medium';
    } else {
      this.progressClass = 'high';
    }
  }

  ngOnInit(): void {
    this.loadAttendances();
    this.fetchTotalWorkingHours();
  }

  loadAttendances(): void {
    this.attendanceService.getAttendancesForCurrentMonth(this.employeeId, this.page, this.size)
      .subscribe(response => {
        // Assign filtered attendances and pagination info
        this.attendances = response.content; // Adjust based on API response
        this.totalPages = response.totalPages; // Adjust based on API response

        console.log('Filtered Attendances:', this.attendances);
        console.log('Total Pages:', this.totalPages);
      });
  }


  onSearch(): void {
    this.page = 0; // Reset to the first page on new search
    this.loadAttendances();
  }

  onPageChange(newPage: number): void {
    this.page = newPage;
    this.loadAttendances();
  }

  fetchTotalWorkingHours(): void {
    this.attendanceService.getTotalWorkingHours(this.employeeId).subscribe({
      next: (hours) => {
        this.totalHoursWorked = hours;
        this.progress = (this.totalHoursWorked / this.TOTAL_MONTHLY_HOURS) * 100;
      },
      error: (error) => {
        console.error('Error fetching total working hours', error);
      }
    });
  }
}
