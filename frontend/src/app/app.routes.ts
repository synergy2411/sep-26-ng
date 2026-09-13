import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { PipeDemo } from './core/pipe-demo/pipe-demo';
import { ObservableDemo } from './core/observable-demo/observable-demo';
import { Todos } from './core/todos/todos';
import { loginGuard } from './core/guards/login-guard';
import { exitGuard } from './core/guards/exit-guard';

export const routes: Routes = [
  {
    path: 'login', // http://localhost:4200/login
    component: Login,
  },
  {
    path: 'register',
    component: Register,
    canDeactivate: [exitGuard],
  },
  {
    path: 'pipe',
    component: PipeDemo,
  },
  {
    path: 'observable',
    component: ObservableDemo,
  },
  {
    path: 'todos',
    component: Todos,
    canActivate: [loginGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
