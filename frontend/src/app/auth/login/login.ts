import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Auth } from '../../core/services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(Auth);
  router = inject(Router);
  responseMessage = '';

  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    this.responseMessage = 'Submitting...';
    this.authService
      .onLogin(loginForm.value.username, loginForm.value.password)
      .subscribe((flag) => {
        if (flag) {
          this.responseMessage = 'Success';
          this.router.navigate(['/todos']);
        } else {
          this.responseMessage = 'Bad Credentials';
        }
      });
  }
}
