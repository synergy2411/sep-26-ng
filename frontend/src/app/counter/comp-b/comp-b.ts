import { Component, inject } from '@angular/core';
import { Counter } from '../../core/services/counter';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.css',
})
export class CompB {
  ctr = inject(Counter);
}
