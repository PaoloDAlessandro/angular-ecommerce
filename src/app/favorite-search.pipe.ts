import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './dati/product.data';

@Pipe({
  name: 'favoriteSearch'
})
export class FavoriteSearchPipe implements PipeTransform {

  transform(value: Product[], research: string): Product[] {
    if (research === "") return value

    return value.filter(p => p.name.toLowerCase().indexOf(research.toLowerCase()) != -1)

  }

}
