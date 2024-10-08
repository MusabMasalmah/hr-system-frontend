import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders,HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/v0/employees';

  constructor(private http: HttpClient) { }


  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}`, data, { headers });
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);}


    searchData(searchTerm: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/search`, {
          params: { searchTerm: searchTerm }
      });
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(employee: any): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/update`, employee);
  }


}
