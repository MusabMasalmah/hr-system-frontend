import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../services/Auth/auth-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIcon,NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private authService : AuthService,private router : Router){

  }
  isLogin: boolean = true;
  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  toggleForm(option: string) {
    this.isLogin = option === 'login';
  }

  onRegister(form: NgForm){
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    if (this.authService.register(this.registerData)){
      alert("Registered Successfully")
        this.isLogin = true;
    }
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.authService.logIn(this.loginData)
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/']);
        } else {
          console.error('Login failed');
        }
      }, err => {
        console.error('An error occurred:', err);
      });
  }



}
