import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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

  promiseTwo: any;

  promiseOne = new Promise((resolve) => {
    setTimeout(() => {
      console.log('Promise 1');
      resolve('1. Incoming Data from Server');
    }, 1000);
  }).then(() => {
    this.promiseTwo = new Promise((resolve) => {
      setTimeout(() => {
        console.log('Promise 2');
        resolve('2. Incoming Data from Server');
      }, 3000);
    });
  });

  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next('First Package'), 1000);
    setTimeout(() => observer.next('Second Package'), 2000);
    setTimeout(() => observer.next('Third Package'), 3000);
    setTimeout(() => observer.next('Fourth Package'), 4500);
  });
}
