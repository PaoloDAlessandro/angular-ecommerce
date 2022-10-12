import { Component, OnInit } from '@angular/core';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userCart :Product[] = []
  faTrash = faTrash

  constructor(private productService :ProductsService) {
    this.userCart = productService.cart
   }

  ngOnInit(): void {
  }

  decreaseStock(slug: string) {
    if(this.searchInUserCart(slug)!.stock > 0) this.searchInUserCart(slug)!.stock = Number(this.searchInUserCart(slug)!.stock) - 1
  }
  increaseStock(slug: string) {
    if(this.searchInUserCart(slug)!.stock > 0) this.searchInUserCart(slug)!.stock = Number(this.searchInUserCart(slug)!.stock) + 1
  }

  onDeleteFromCart(slug: string) {
    console.log(slug);
    this.productService.removeFromCart(this.searchInUserCart(slug) as Product)
    console.log(this.productService.cart);
    this.userCart = this.productService.cart

  }

  searchInUserCart(slug: string) {
    return this.userCart.find(p => p.slug === slug)
  }
}
