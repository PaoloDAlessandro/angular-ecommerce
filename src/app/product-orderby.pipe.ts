import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './dati/product.data';

@Pipe({
  name: 'productOrderby'
})
export class ProductOrderbyPipe implements PipeTransform {

  transform(value: Product[], filter :String, order ?:String, category ?:String): Product[] {

    switch(filter) {
      case 'price':
        if(order === "cres") {
          return value.sort((a, b) => (Number(a.price) < Number(b.price)) ? 1 : -1)
        }
        else {
          return value.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1)
        }

      case 'review':
        if(order === "cres") {
          return value.sort((a, b) => (Number(a.reviews) < Number(b.reviews) ? 1 : -1))
        }
        else {
          return value.sort((a, b) => (Number(a.reviews) > Number(b.reviews) ? 1 : -1))
        }

      case 'category':
        return value.filter(p => p.category === category)

      case 'stock':
        if(order === "cres") {
          return value.sort((a, b) => (a.stock < b.stock) ? 1 : -1)
        }
        else {
          return value.sort((a, b) => (a.stock > b.stock) ? 1 : -1)
        }

      default:
        return value
    }
  }

}
