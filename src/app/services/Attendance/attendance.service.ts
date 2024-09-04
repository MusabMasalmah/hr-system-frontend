import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private BaseUrl = 'http://localhost:8080/Attendance/V0'

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/v0/employees`);
  }

  // Method to get attendances by employeeId with pagination and optional date search
  getAttendances(employeeId: number, page: number, size: number): Observable<any> {
    const url = `${this.BaseUrl}/get_AttendancesByEmployeeId/${employeeId}`;
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(url, { params });
  }

  getAttendancesForCurrentMonth(employeeId: number, page: number, size: number): Observable<any> {
    const url = `${this.BaseUrl}/get_AttendancesForCurrentMonth/${employeeId}`;
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(url, { params });
  }

  // Method to save attendance
  saveAttendance(startTime: string, endTime: string): Observable<any> {

    const attendance = {
      startTime: startTime,
      endTime: endTime,
      date: new Date().toISOString().split('T')[0],  // current date in YYYY-MM-DD format
      employeeId: 2,
      type: 'ONSITE'
    };

    console.log(attendance);

    return this.http.post<any>(`${this.BaseUrl}/save_Attendance`, attendance)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTotalWorkingHours(employeeId: number): Observable<number> {
    const url = `${this.BaseUrl}/get_TotalWorkingHoursForCurrentMonth/${employeeId}`;
    return this.http.get<number>(url);
  }

  // Method to get attendances by employeeId with pagination
  getAttendancesByEmployeeId(employeeId: number, page: number, size: number): Observable<any> {
    const url = `${this.BaseUrl}/get_AttendancesByEmployeeId/${employeeId}`;
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(url, { params });
  }

  // Method to get attendances for the current day with pagination
  getAttendancesForCurrentDay(page: number, size: number): Observable<any> {
    const url = `${this.BaseUrl}/get_TodayAttendances`;
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<any>(url, { params });
  }

  // Update attendance
  updateAttendance(id: number, attendance: any): Observable<any> {
    return this.http.put<any>(`${this.BaseUrl}/update_Attendance/${id}`, attendance);
  }

  // Delete attendance
  deleteAttendance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BaseUrl}/delete_Attendance/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400 || error.status === 409) {
      // Handle duplicate attendance case
      alert('You have already recorded attendance for this date.');
    } else {
      // Handle other errors
      alert('An error occurred. Please try again.');
    }
    return throwError(() => new Error('An error occurred'));
  }
}
