import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  private counter = 0;

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }

  getCounter() {
    return this.counter;
  }
}
