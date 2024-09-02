import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Attendance } from '../../models/Attendance';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-attendance-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-attendance-modal.component.html',
  styleUrl: './edit-attendance-modal.component.css'
})
export class EditAttendanceModalComponent {
  @Input() attendance: any | null = null;
  @Output() attendanceUpdated = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  saveChanges(): void {
    if (this.attendance) {
      this.attendanceUpdated.emit(this.attendance);
    }
  }

  closeModal(): void {
    this.close.emit();
  }
}
