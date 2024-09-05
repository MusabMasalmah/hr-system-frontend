import { Injectable } from '@angular/core';
import { Observable,of,delay, map, catchError } from 'rxjs';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v0/';

  constructor(private http: HttpClient) { }

  is_Hr(): boolean {
    if(localStorage.getItem('role') === 'HR'){
      return true;
    }
    return false;
  }
  token(){
    return localStorage.getItem('auth');

  }

  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);}

  logIn(loginData: any) {
    localStorage.setItem("auth", "123");
    if(loginData.email == "mo@gmail.com"){
      localStorage.setItem("role", "HR");
    }
    return of(true);
  }

  get isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      return !!this.token();
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }
}
