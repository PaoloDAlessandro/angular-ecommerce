import { Component, OnInit } from '@angular/core';

import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { ThememodeService } from '../thememode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faMedal = faMedal
  faTruck = faTruck
  faCoins = faCoins


  constructor(private themeModeService :ThememodeService) {
   }

  ngOnInit(): void {
  }

  getThemeMode() {
    return this.themeModeService.thememode
  }

}
