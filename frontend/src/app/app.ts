import { Component } from '@angular/core';
import { DirectiveDemo } from './core/directive-demo/directive-demo';
import { PipeDemo } from './core/pipe-demo/pipe-demo';
import { Users } from './core/users/users';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Users, DirectiveDemo, PipeDemo, Login, Register],
})
export class App {}
