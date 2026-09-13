import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  product = {
    title: 'iPhone 18 Duo',
    price: 1999,
    qty: 199,
    releaseDate: new Date('Sep 18, 2026'),
  };

  promise = new Promise((resolve) => {
    setTimeout(() => resolve('Incoming Data from Server'), 1500);
  });
}
