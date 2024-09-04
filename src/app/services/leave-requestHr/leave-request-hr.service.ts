import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../../models/leave-request';
import { Page } from '../../models/page';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestHrService {
  private baseUrl = 'http://localhost:8080/v0/leave-requests';

  constructor(private http: HttpClient) {}

  getLeaveRequestsByHrEmployeeId(hrEmployeeId: number, page: number, size: number): Observable<Page<LeaveRequest>> {
    const params = new HttpParams()
      .set('hrEmployeeId', hrEmployeeId.toString())
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.http.get<Page<LeaveRequest>>(`${this.baseUrl}/hr`, { params });
  }

  updateLeaveRequestByHR(id: number, leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    return this.http.put<LeaveRequest>(`${this.baseUrl}/hr/update/${id}`, leaveRequest);
  }
}
