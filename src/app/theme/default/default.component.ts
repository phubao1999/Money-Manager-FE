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
      icon: 'home',
    },
    {
      name: 'Logout',
      icon: 'home',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openNavbar() {
    this.navOpen = !this.navOpen;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
