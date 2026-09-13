import { Component, inject } from '@angular/core';
import { Counter } from '../../core/services/counter';

@Component({
  selector: 'app-comp-a',
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.css',
  // providers: [Counter],      // New Singleton Injector token is created for every service registration
})
export class CompA {
  ctr = inject(Counter);
}
