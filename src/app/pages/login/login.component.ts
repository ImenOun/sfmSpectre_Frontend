import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onLogin(event: Event) {
    event.preventDefault();
    if (this.username && this.password) {
      // Basic login placeholder, redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }
}
