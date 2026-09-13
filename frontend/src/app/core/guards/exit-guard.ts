import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { Register } from '../../auth/register/register';

export const exitGuard: CanDeactivateFn<Register> = (
  component: Register,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot,
) => {
  return component.shouldExit();
};
