import { Component } from '@angular/core';
import { Observable, Subscription, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.css',
})
export class ObservableDemo {
  unSub$!: Subscription;

  interval$ = interval(1000);

  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next('First Package'), 1000);
    setTimeout(() => observer.next('Second Package'), 2500);
    setTimeout(() => observer.next('Third Package'), 3000);
    // setTimeout(() => observer.error(new Error('Something went wrong')), 4000);
    setTimeout(() => observer.next('Fourth Package'), 5000);
    setTimeout(() => observer.complete(), 5500);
  });

  onSubscribe() {
    this.interval$
      .pipe(
        filter((val) => val % 2 == 0),
        map((val) => val * 10),
        take(5),
      )
      .subscribe((data) => console.log('Interval : ', data));

    this.unSub$ = this.obs$.subscribe({
      next: (data) => console.log('Data : ', data),
      error: (err) => console.error(err),
      complete: () => console.log('[COMPLETED]'),
    });
  }

  onUnsubscribe() {
    this.unSub$.unsubscribe();
  }
}
