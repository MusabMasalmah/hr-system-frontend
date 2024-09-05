import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../../services/leave-requestEmp/view-leave-request-emp.service';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';


@Component({
  selector: 'app-employee-leave-requests',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf, NgFor, MatSnackBarModule, MatDialogModule, ConfirmDeleteDialogComponent],
  templateUrl: './employee-leave-requests.component.html',
  styleUrls: ['./employee-leave-requests.component.css']
})
export class EmployeeLeaveRequestsComponent implements OnInit {
  leaveRequests: any[] = [];
  page: number = 0;
  size: number = 5;
  totalPages: number = 0;
  employeeId: number = 2; // Static employee ID

  constructor(
    private leaveRequestService: LeaveRequestService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequestsByEmployeeId(this.employeeId, this.page, this.size)
      .subscribe(response => {
        this.leaveRequests = response.content; // Adjust based on API response
        this.totalPages = response.totalPages; // Adjust based on API response
      });
  }

  onPageChange(newPage: number): void {
    this.page = newPage;
    this.loadLeaveRequests();
  }

  deleteLeaveRequest(requestId: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // If the user confirmed deletion
        this.leaveRequestService.deleteLeaveRequest(requestId).subscribe(() => {
          this.leaveRequests = this.leaveRequests.filter(req => req.id !== requestId);
          this.snackBar.open('Leave request deleted successfully', 'Close', {
            duration: 3000, // Duration of the snackbar in milliseconds
          });
        });
      }
    });
  }
}
