import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './dati/product.data';

@Pipe({
  name: 'productSearch'
})
export class ProductSearch implements PipeTransform {

  transform(products: Product[], research: string): Product[] {
    if(research === "") return products

    return products.filter(p => p.name.toLowerCase().indexOf(research.toLowerCase()) != -1)

  }

}

