import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './core/users/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Users],
})
export class App {}
