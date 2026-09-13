import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isLoggedIn = false;
  router = inject(Router);

  onLogin(email: string, password: string) {
    // Simulate XHR Call to verify user credentials
    return new Observable((observer) => {
      setTimeout(() => {
        if (email === 'test@test.com' && password === 'test!123') {
          this.isLoggedIn = true;
          observer.next(true);
        } else {
          observer.next(false);
        }
      }, 1500);
    });
  }

  onLogout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
