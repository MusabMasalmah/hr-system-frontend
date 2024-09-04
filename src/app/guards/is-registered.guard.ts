import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/Auth/auth-service.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const isRegisteredGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn){
    router.navigate(['']);

    return false;
  }
  return true;
};
