import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './dati/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products :Product[] = [
    {code:"001", name:"Iphone XR 64GB", category:"smarthphone", slug:"iphone-xr", photo:"iphoneXr.jpg", price:500.50, stock:3, reviews:4},
    {code:"002", name:"MacBook Pro 2021", category:"laptop", slug:"macbookpro-2021", photo:"macbookpro.jpeg", price:2549, stock:7, reviews:5},
    {code:"003", name:"Sennheiser HD 450BT", category:"headphone", slug:"sennheiser-hd-450bt", photo:"sennheiserhd450bt.jpeg", price:199.99, stock:23, reviews:3},
  ]

  public emitter = new Subject<Product[]>()

  private _cart :Product[] = []


  constructor() {
  }

  addToCart(product:Product) {
    this._cart.push(product)
  }

  removeFromCart(product:Product) {
    this._cart = this._cart.filter(p => p !== product)
  }

  searchProduct(slug: String) {
    return this._products.find(p => p.slug === slug)
  }

  get products() {
    return [...this._products]
  }

  get cart() {
    return [...this._cart]
  }
}
