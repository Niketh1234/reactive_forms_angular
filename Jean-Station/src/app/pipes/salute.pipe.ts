import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salute'
})
export class SalutePipe implements PipeTransform {

  transform(value: unknown, gender:string): string {
    if(gender == 'male')
      return 'Mr.'+value;
    else
      return 'Ms.'+value;
  }

}
