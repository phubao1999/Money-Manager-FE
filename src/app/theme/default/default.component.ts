import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  navOpen: boolean = true;
  menuItem = [
    {
      name: 'OverView',
      icon: 'home',
    },
    {
      name: 'Setting Balance',
      icon: 'home',
    },
    {
      name: 'Spend Mark',
      icon: 'home',
    },
    {
      name: 'History',
      icon: 'home',
    },
    {
      name: 'Remark',
      icon: 'task',
    },
  ];
  userInfo;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
    console.log(this.userInfo);
  }

  openNavbar() {
    this.navOpen = !this.navOpen;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
