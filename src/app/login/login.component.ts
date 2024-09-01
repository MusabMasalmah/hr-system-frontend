import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIcon,NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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

  onRegister(){
    console.log("Register")
  }

  onLogin(){
    alert("log in")
  }

}
