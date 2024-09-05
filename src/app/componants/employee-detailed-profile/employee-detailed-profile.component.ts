import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/Employee/employee.service';
import { Employee } from '../../models/employee.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, formatDate, NgFor, NgIf } from '@angular/common';
import { AttendanceService } from '../../services/Attendance/attendance.service';
import { LeaveRequestService } from '../../services/leaveRequest/leaveRequest.service';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-employee-detailed-profile',
  standalone: true,
  imports: [MatCardModule,NgIf,NgFor,CommonModule,MatTableModule ],
  templateUrl: './employee-detailed-profile.component.html',
  styleUrl: './employee-detailed-profile.component.css'
})
export class EmployeeDetailedProfileComponent implements OnInit {
  employeeId: number = 0;
  employee: Employee | null = null;
  attendances : any[] = []
  leaveRequests:any[] = []
  dataSource: any[] = [];


  displayedColumns: string[] = ['id',  'start_time', 'end_time', 'status', 'type', 'reason', 'reasonForHr'];
  displayedColumnsAttendance: string[] = [ 'date', 'start_time', 'end_time'];

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private attendanceService :AttendanceService, private leaveRequestService :LeaveRequestService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.employeeId = +id;
        this.loadEmployeeDetails(this.employeeId);
        this.getAttendances(this.employeeId)
        this.getLeaveRequestsByEmployeeId(this.employeeId)
      } else {
        console.error('No id found in route parameters');
      }
    });
  }
  loadEmployeeDetails(id: number) {
    this.employeeService.getEmployeeById(id).subscribe(data => {
      this.employee = data;
    });
  }
  getAttendances(id: number) {
    this.attendanceService.getAttendancesByEmployeeId(id, 0, 10).subscribe(data => {
      console.log(data)
      this.attendances = data.content;
    });
  }
  getLeaveRequestsByEmployeeId(id:number){
    this.leaveRequestService.getLeaveRequestsByEmployeeId(id).subscribe(data => {
      this.dataSource = data;
    });
  }


  formatTime(time: string): string {
    // Check if the time is already in 'HH:mm' format
    if (/^\d{2}:\d{2}$/.test(time)) {
      return time; // Just return the time as is
    }

    // Handle cases where time might be in 'HH:mm:ss' format
    const parts = time.split(':');
    if (parts.length === 3) {
      return `${parts[0]}:${parts[1]}`; // Format to 'HH:mm'
    }

    return time; // Fallback to original value if it doesn't match expected formats
  }
}
