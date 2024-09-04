import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeaveRequestService } from '../../services/leave-request/leave-request.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-leave-request',
  standalone: true,
  imports: [FormsModule, CommonModule, MatSnackBarModule],
  templateUrl: './add-leave-request.component.html',
  styleUrls: ['./add-leave-request.component.css']
})
export class AddLeaveRequestComponent implements OnInit {
  startDate: string = ''; // Format: YYYY-MM-DDTHH:MM
  endDate: string = '';   // Format: YYYY-MM-DDTHH:MM
  reason: string = '';
  type: string = 'PAID';
  hrEmployeeId: number | null = null;
  hrEmployees: any[] = [];
  employeeId: number = 2; // Static employee ID
  status: string = 'PENDING';

  constructor(private leaveRequestService: LeaveRequestService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadHREmployees();
  }

  loadHREmployees() {
    this.leaveRequestService.getEmployees().subscribe({
      next: (employees) => {
        this.hrEmployees = employees.filter((emp: { role: string; }) => emp.role === 'HR');
      },
      error: (error) => {
        console.error('Error fetching HR employees', error);
      }
    });
  }

  onSubmit() {
    if (this.startDate && this.endDate && this.reason && this.hrEmployeeId) {
      const leaveRequest = {
        start_time: this.startDate,
        end_time: this.endDate,
        reason: this.reason,
        type: this.type,
        hrEmployeeId: this.hrEmployeeId,
        employeeId: this.employeeId,
        status: this.status,
        reasonForHr: null
      };
  
      this.leaveRequestService.saveLeaveRequest(leaveRequest).subscribe({
        next: () => {
          this.snackBar.open('Leave request saved successfully!', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['custom-snackbar']
          });
          this.resetForm();
        },
        error: (error) => {
          this.snackBar.open('Error saving leave request', 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: ['custom-snackbar']
          });
          console.error('Error saving leave request', error);
        }
      });
    } else {
      this.snackBar.open('Please fill in all required fields.', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['custom-snackbar']
      });
    }
  }

  resetForm() {
    this.startDate = '';
    this.endDate = '';
    this.reason = '';
    this.type = 'PAID';
    this.hrEmployeeId = null;
  }
}
