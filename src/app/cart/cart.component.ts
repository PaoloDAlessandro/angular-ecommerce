import { Component, OnInit } from '@angular/core';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userCart :Product[] = []

  constructor(private productService :ProductsService) {
    this.userCart = productService.cart
   }

  ngOnInit(): void {
  }

}
