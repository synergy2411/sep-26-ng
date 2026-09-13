import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);

  return authService.isAuthenticated();
};
