import { Component, OnInit } from '@angular/core';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userCart :Product[] = []

  total :number = 0

  constructor(private productsService :ProductsService) {
    this.userCart = this.productsService.cart
    this.cartTotal()
   }

  ngOnInit(): void {
  }

  cartTotal() {
    this.userCart.forEach(product => {
      this.total += Number(product.price) * Number(product.stock)
    });
    this.total = Number(this.total.toFixed(2))
  }

}
