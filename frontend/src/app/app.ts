import { Component } from '@angular/core';
import { CompA } from './counter/comp-a/comp-a';
import { CompB } from './counter/comp-b/comp-b';
import { Counter } from './core/services/counter';
import { ObservableDemo } from './core/observable-demo/observable-demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ObservableDemo],
  // providers: [Counter],
})
export class App {}
