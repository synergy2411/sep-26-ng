import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './core/users/users';
import { DirectiveDemo } from './core/directive-demo/directive-demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Users, DirectiveDemo],
})
export class App {}
