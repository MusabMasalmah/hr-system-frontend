import { Injectable } from '@angular/core';
import { Observable,of,delay, map, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v0/auth';

  constructor() {      }

  is_Hr(): boolean {
    return true;
  }
  token(){
    return localStorage.getItem('auth');

  }

  logIn(loginData: any): Observable<boolean> {
    localStorage.setItem("auth", "123");
    return of(true).pipe(

      map(() => {
        delay(1000)
        return this.isLoggedIn;
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(false);
      })
    );
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
