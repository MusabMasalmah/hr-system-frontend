import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth-service.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn){
    if(authService.is_Hr()){
      return true;
    }
    return false;
  }
  router.navigate(['login']);
  return false;
};
