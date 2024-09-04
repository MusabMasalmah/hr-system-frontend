import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../services/Auth/auth-service.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,MatIcon,MatDividerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService : AuthService){}
    isHr(): boolean{
      return this.authService.is_Hr();
    }
    logout(){
      this.authService.logout();
    }
    isLoggedIn() : boolean {
      return this.authService.isLoggedIn;
    }

}
