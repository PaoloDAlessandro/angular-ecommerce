import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faCartShopping, faS } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { ThememodeService } from './thememode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  faCartShopping = faCartShopping
  faHeart = faHeart
  faMoon = faMoon
  faSun = faSun

  constructor(private route :ActivatedRoute, private router: Router, private themeModeService: ThememodeService) {
    if(this.getThemeMode()) document.getElementsByTagName("body")[0].style.backgroundColor = "black"
    else document.getElementsByTagName("body")[0].style.backgroundColor = "white"
  }

  switchThemeMode() {
    this.themeModeService.switchThemeMode()
    if(this.getThemeMode()) document.getElementsByTagName("body")[0].style.backgroundColor = "black"
    else document.getElementsByTagName("body")[0].style.backgroundColor = "white"
  }

  getThemeMode() {
    return this.themeModeService.thememode
  }
}
