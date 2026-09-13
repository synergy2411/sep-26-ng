import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { PipeDemo } from './core/pipe-demo/pipe-demo';
import { ObservableDemo } from './core/observable-demo/observable-demo';
import { Todos } from './core/todos/todos';

export const routes: Routes = [
  {
    path: 'login', // http://localhost:4200/login
    component: Login,
  },
  {
    path: 'register',
    component: Register,
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
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
