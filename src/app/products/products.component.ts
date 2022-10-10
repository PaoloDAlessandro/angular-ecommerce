import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  faBoxOpen = faBoxOpen;
  faStar = faStar;
  private productsSubscription?:Subscription

  products:Product[] = []

  constructor(private productsService:ProductsService) {
    this.products = productsService.products
   }

  ngOnInit(): void {
  }

}
