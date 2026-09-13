import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  fb = inject(FormBuilder);
  registerForm: FormGroup;

  constructor() {
    this.registerForm = this.fb.group({
      email: new FormControl('test@example.com', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
    });
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }

  shouldExit() {
    return confirm('Are you sure to leave the page?');
  }
}
