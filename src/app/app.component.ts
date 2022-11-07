import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OnInit } from '@angular/core';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { ThememodeService } from './thememode.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  faCartShopping = faCartShopping
  faHeart = faHeart
  faMoon = faMoon
  faSun = faSun
  faBars = faBars
  mobileMenuStatus = false

  constructor(private route :ActivatedRoute, private router: Router, private themeModeService: ThememodeService) {
    if(this.getThemeMode()) document.getElementsByTagName("body")[0].style.backgroundColor = "black"
    else document.getElementsByTagName("body")[0].style.backgroundColor = "white"
  }

  ngOnInit(): void {
  }

  switchThemeMode() {
    this.themeModeService.switchThemeMode()
    if(this.getThemeMode()) document.getElementsByTagName("body")[0].style.backgroundColor = "black"
    else document.getElementsByTagName("body")[0].style.backgroundColor = "white"
  }

  getThemeMode() {
    return this.themeModeService.thememode
  }

  mobileMenuSwitch() {
    this.mobileMenuStatus = !this.mobileMenuStatus
    console.log(this.mobileMenuStatus);

  }

  getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
      return "desktop";
    };
  }
