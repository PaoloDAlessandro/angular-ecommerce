import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  faCartShopping = faCartShopping
  faHeart = faHeart

  constructor(private route :ActivatedRoute, private router: Router) {
  }
}
