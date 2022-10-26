import { Injectable } from '@angular/core';
import { Product } from './dati/product.data';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _favoritesProducts: Product [] = []

  constructor() { }

  addToFavorites(product: Product) {
    this._favoritesProducts.push(product)
  }

  removeToFavorites(product: Product) {
    this._favoritesProducts = this._favoritesProducts.filter(p => p !== product)
  }

  checkFavorites(product: Product) {
    return this._favoritesProducts.find(p => p == product) !== undefined
  }

  get favorites() {
    return [...this._favoritesProducts]
  }

}
