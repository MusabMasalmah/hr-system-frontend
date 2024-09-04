// leave-request.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {
  private baseUrl = 'http://localhost:8080/v0/leave-requests';
 // private employeesUrl = 'http://localhost:8080/api/v0/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/v0/employees`);
  }

  saveLeaveRequest(leaveRequest: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addLeaveRequest`, leaveRequest);
  }
}
