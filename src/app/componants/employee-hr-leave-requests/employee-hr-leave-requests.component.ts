import { Component, OnInit } from '@angular/core';
import { LeaveRequestHrService } from '../../services/leave-requestHr/leave-request-hr.service';
import { LeaveRequest } from '../../models/leave-request';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateLeaveRequestDialogComponent } from '../update-leave-request-dialog/update-leave-request-dialog.component';

@Component({
  selector: 'app-employee-hr-leave-requests',
  templateUrl: './employee-hr-leave-requests.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, UpdateLeaveRequestDialogComponent, NgFor],
  styleUrls: ['./employee-hr-leave-requests.component.css'],
})
export class EmployeeHrLeaveRequestsComponent implements OnInit {
  leaveRequests: LeaveRequest[] = [];
  page: number = 0;
  size: number = 5;
  totalPages: number = 0;
  hrEmployeeId: number = 4; // Static HR employee ID
  selectedLeaveRequest: LeaveRequest | null = null;

  constructor(private leaveRequestHrService: LeaveRequestHrService) {}

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests(): void {
    this.leaveRequestHrService
      .getLeaveRequestsByHrEmployeeId(this.hrEmployeeId, this.page, this.size)
      .subscribe((response) => {
        this.leaveRequests = response.content;
        this.totalPages = response.totalPages;
      });
  }

  onPageChange(newPage: number): void {
    this.page = newPage;
    this.loadLeaveRequests();
  }

  openUpdateModal(request: LeaveRequest): void {
    this.selectedLeaveRequest = { ...request };
  }

  closeUpdateModal(): void {
    this.selectedLeaveRequest = null;
  }

  updateLeaveRequest(updatedRequest: LeaveRequest): void {
    if (updatedRequest && this.selectedLeaveRequest) {
      this.leaveRequestHrService.updateLeaveRequestByHR(this.selectedLeaveRequest.id, updatedRequest).subscribe(() => {
        this.loadLeaveRequests();
        this.closeUpdateModal();
      });
    }
  }
}
