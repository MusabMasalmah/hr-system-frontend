import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {
  
  private baseUrl = 'http://localhost:8080/v0/leave-requests'; // Adjust based on your API

  constructor(private http: HttpClient) {}

  getLeaveRequestsByEmployeeId(employeeId: number, page: number, size: number): Observable<any> {
    const url = `${this.baseUrl}/employee`;
    let params = new HttpParams()
      .set('employeeId', employeeId.toString())
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(url, { params });
  }

  deleteLeaveRequest(requestId: number): Observable<void> {
    const url = `${this.baseUrl}/employee/delete/${requestId}`;
    return this.http.delete<void>(url);
  }
}
