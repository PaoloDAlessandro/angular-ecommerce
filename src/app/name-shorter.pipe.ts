import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameShorter'
})
export class NameShorterPipe implements PipeTransform {

  transform(value: string) {
    if (value?.length > 17) {
      return value.substring(0,17) + ".."
    } else {
      return value
    }
  }
}
