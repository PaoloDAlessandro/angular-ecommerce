import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './dati/product.data';

@Pipe({
  name: 'productOrderby'
})
export class ProductOrderbyPipe implements PipeTransform {

  transform(value: Product[], filter :String, order ?:String): Product[] {

    switch(filter) {
      case 'price':
        return value.sort((a, b) => (Number(a.price) < Number(b.price)) ? 1 : -1)

      case 'review':
        return value.sort((a, b) => (Number(a.reviews) < Number(b.reviews) ? 1 : -1))

      default:
        return value
    }
  }

}
