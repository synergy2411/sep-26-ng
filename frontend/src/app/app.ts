import { Component } from '@angular/core';
import { CompA } from './counter/comp-a/comp-a';
import { CompB } from './counter/comp-b/comp-b';
import { Counter } from './core/services/counter';
import { ObservableDemo } from './core/observable-demo/observable-demo';
import { Todos } from './core/todos/todos';
import { MainNavigation } from './layout/main-navigation/main-navigation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [MainNavigation, RouterOutlet],
  // providers: [Counter],
})
export class App {}
