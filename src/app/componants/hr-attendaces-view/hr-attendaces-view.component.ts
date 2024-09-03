import { Component } from '@angular/core';
import { AttendanceService } from '../../services/AttendanceService/attendance.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { EditAttendanceModalComponent } from '../edit-attendance-modal/edit-attendance-modal.component'; // Import the modal component

@Component({
  selector: 'app-hr-attendaces-view',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf, NgFor, EditAttendanceModalComponent], // Include the modal component
  templateUrl: './hr-attendaces-view.component.html',
  styleUrls: ['./hr-attendaces-view.component.css']
})
export class HrAttendacesViewComponent {
  attendances: any[] = [];
  totalPages: number = 0;
  page: number = 0;
  size: number = 10;
  employeeId: number | null = null;
  viewMode: 'employee' | 'today' = 'today';
  editingAttendance: any | null = null;
  employees: any[] = [];

  constructor(private hrAttendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadAttendances();
    this.hrAttendanceService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }

  loadAttendances(): void {
    if (this.viewMode === 'employee' && this.employeeId !== null) {
      this.hrAttendanceService.getAttendancesByEmployeeId(this.employeeId, this.page, this.size)
        .subscribe(response => {
          this.attendances = response.content;
          this.totalPages = response.totalPages;
        });
    } else if (this.viewMode === 'today') {
      this.hrAttendanceService.getAttendancesForCurrentDay(this.page, this.size)
        .subscribe(response => {
          this.attendances = response.content;
          this.totalPages = response.totalPages;
        });
    }
  }

  setViewMode(mode: 'employee' | 'today'): void {
    this.viewMode = mode;
    this.page = 0;
    this.loadAttendances();
  }

  setEmployeeId(id: number): void {
    this.employeeId = id;
    this.setViewMode('employee');
  }

  editAttendance(attendance: any): void {
    console.log('Editing attendance:', attendance);
    this.editingAttendance = { ...attendance };
  }

  updateAttendance(updatedAttendance: any): void {
    this.hrAttendanceService.updateAttendance(updatedAttendance.id, updatedAttendance)
      .subscribe(() => {
        this.editingAttendance = null;
        this.loadAttendances();
      });
  }

  cancelEdit(): void {
    this.editingAttendance = null;
  }

  deleteAttendance(id: number): void {
    const isConfirmed = confirm("Are you sure you want to delete this attendance record?");
    
    if (isConfirmed) {
      this.hrAttendanceService.deleteAttendance(id).subscribe(() => {
        this.loadAttendances();
      });
    }
  }
  
}
