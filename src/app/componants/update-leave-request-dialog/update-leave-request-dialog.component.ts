import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeaveRequest } from '../../models/leave-request';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-leave-request-dialog',
  templateUrl: './update-leave-request-dialog.component.html',
  styleUrls: ['./update-leave-request-dialog.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
})
export class UpdateLeaveRequestDialogComponent {
  @Input() leaveRequest!: LeaveRequest; // Use Input decorator to receive the leave request data
  @Output() leaveRequestUpdated = new EventEmitter<LeaveRequest>(); // Use Output decorator to emit updated data
  @Output() close = new EventEmitter<void>(); // Use Output decorator to notify the parent to close the modal

  statusOptions = ['PENDING', 'ACCEPTED', 'DECLINED'];

  onSave(): void {
    this.leaveRequestUpdated.emit(this.leaveRequest); // Emit the updated leave request
  }

  onCancel(): void {
    this.close.emit(); // Emit a close event to notify the parent to close the modal
  }
}
