import { Component } from '@angular/core';
import { DirectiveDemo } from './core/directive-demo/directive-demo';
import { PipeDemo } from './core/pipe-demo/pipe-demo';
import { Users } from './core/users/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Users, DirectiveDemo, PipeDemo],
})
export class App {}
