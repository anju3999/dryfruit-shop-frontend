import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Implement authentication methods
  login(username: string, password: string) {
    // Logic for user login
  }

  logout() {
    // Logic for user logout
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated
    return !!localStorage.getItem('token');
  }
}
