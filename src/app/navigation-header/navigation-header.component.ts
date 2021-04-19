import { Component, OnInit } from '@angular/core';
import {NavService} from '../nav.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent  implements OnInit {

  constructor(public navService: NavService) { }

  ngOnInit() {
  }

}
