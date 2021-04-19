import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material/core';
import {NavItem} from './nav-item';
import {NavService} from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  title = 'PrismForce Assignment';
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: 'default',
    },
    {
      displayName: 'Register Profile',
      iconName: 'person',
      route: 'register',
      children: [
        {
          displayName: "New Candidate",
          iconName: "star_rate",
          route: "register/new-registration"
        }
      ]
    },
    {
      displayName: 'Candidates List',
      iconName: 'account_box',
      route: 'candidate-data',
    },

  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
