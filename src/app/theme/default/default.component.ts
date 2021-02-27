import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  navOpen: boolean = true;
  menuItem = [
    {
      name: 'OverView',
      icon: 'home',
    }, {
      name: 'Setting Balance',
      icon: 'home',
    }, {
      name: 'Spend Mark',
      icon: 'home',
    }, {
      name: 'History',
      icon: 'home',
    }, {
      name: 'Remark',
      icon: 'home',
    }, {
      name: 'Logout',
      icon: 'home',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openNavbar() {
    this.navOpen = !this.navOpen;
  }

}
