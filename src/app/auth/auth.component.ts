import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private SocialAuthService: SocialAuthService,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.SocialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      this.authService.handleLoginEvent(user);
    });
  }

  async signinGG() {
    await this.SocialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['/']);
  }
}
