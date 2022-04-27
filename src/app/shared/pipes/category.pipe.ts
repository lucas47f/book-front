import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Religião' : return 'Holiday Village';
      case 'Aventura': return 'Star Border Purple500'
    }
    return 'Tag Faces';
  }

}
