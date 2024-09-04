export interface LeaveRequest {
    id: number;
    employeeId: number;
    hrEmployeeId: number;
    start_time: Date; 
    end_time: Date;   
    status: string;
    reason: string;
    reasonForHr: string;
  }
  