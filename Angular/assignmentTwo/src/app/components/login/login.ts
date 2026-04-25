import { Component } from '@angular/core';
import { Training } from '../../services/training';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public role: string = '';
  public username: string = '';

  users = [
    { username: 'trainee1', role: 'trainee' },
    { username: 'trainee2', role: 'trainee' },
    { username: 'manager1', role: 'manager' },
    { username: 'manager2', role: 'manager' }
  ];

  constructor(private service: Training) {}

  login() {
    const user = this.users.find(
      u => u.username === this.username && u.role === this.role
    );

    if (user) {
      this.service.setRole(user.role);
      console.log("Login successful:", user);
    } else {
      console.log("Invalid user");
    }
  }
}