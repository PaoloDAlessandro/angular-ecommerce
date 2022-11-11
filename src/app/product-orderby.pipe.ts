import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './dati/product.data';
import { ProductsService } from './products.service';

@Pipe({
  name: 'productOrderby'
})
export class ProductOrderbyPipe implements PipeTransform {

  constructor(private productService :ProductsService) {

  }

  transform(value: Product[], filter :String, category ?:String): Product[] {

    switch(filter) {
      case 'priceHtL':
          return value.sort((a, b) => (Number(a.price) < Number(b.price)) ? 1 : -1)

      case 'priceLtH':
          return value.sort((a, b) => (Number(a.price) > Number(b.price)) ? 1 : -1)

      case 'reviewHtL':
          return value.sort((a, b) => (Number(a.reviews) < Number(b.reviews) ? 1 : -1))

      case 'reviewLtH':
        return value.sort((a, b) => (Number(a.reviews) > Number(b.reviews) ? 1 : -1))

      case 'category':
        if(category === "") {
          return value
        }
        return value.filter(p => p.category === category)

      default:
        return this.productService.products
    }
  }

}
