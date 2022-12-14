import { Component, OnInit } from '@angular/core';
import { Product } from '../dati/product.data';
import { ProductsService } from '../products.service';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ThememodeService } from '../thememode.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userCart :Product[] = []
  faTrash = faTrash

  constructor(private productService :ProductsService, private themeModeService :ThememodeService) {
    this.userCart = productService.cart
   }

  ngOnInit(): void {
  }

  decreaseStock(slug: string) {
    if(this.searchInUserCart(slug)!.stock > 0) {
      this.searchInUserCart(slug)!.stock = Number(this.searchInUserCart(slug)!.stock) - 1
      this.productService.searchProduct(slug)!.stock =  Number(this.productService.searchProduct(slug)?.stock) + 1
    }
    if(this.searchInUserCart(slug)!.stock == 0) {
      this.productService.removeFromCart(this.searchInUserCart(slug) as Product)
      this.userCart = this.productService.cart
    }
  }

  increaseStock(slug: string) {
    if(this.searchInUserCart(slug)!.stock > 0) {
      if(this.productService.searchProduct(slug)!.stock != 0) {
        this.searchInUserCart(slug)!.stock = Number(this.searchInUserCart(slug)!.stock) + 1
        this.productService.searchProduct(slug)!.stock =  Number(this.productService.searchProduct(slug)?.stock) - 1
      }
    }
  }

  onDeleteFromCart(slug: string) {
    this.productService.searchProduct(slug)!.stock = Number(this.productService.searchProduct(slug)!.stock) + Number(this.searchInUserCart(slug)!.stock)

    this.searchInUserCart(slug) as Product
    this.productService.removeFromCart(this.searchInUserCart(slug) as Product)
    this.userCart = this.productService.cart

  }

  clearCart() {
    this.productService.cleanCart()
    this.userCart = this.productService.cart
  }

  searchInUserCart(slug: string) {
    return this.userCart.find(p => p.slug === slug)
  }

  getThemeMode() {
    return this.themeModeService.thememode
  }

}
