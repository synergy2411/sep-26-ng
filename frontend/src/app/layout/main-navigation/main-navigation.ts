import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../core/services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-navigation',
  imports: [RouterLink, CommonModule],
  templateUrl: './main-navigation.html',
  styleUrl: './main-navigation.css',
})
export class MainNavigation {
  authService = inject(Auth);
}
