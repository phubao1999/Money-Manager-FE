import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  handleLoginEvent(user: SocialUser) {
    if (user) {
      this.setStorage(user);
    }
  }

  setStorage(user) {
    return new Promise(() => {
      localStorage.setItem('user', JSON.stringify(user));
    });
  }
}
