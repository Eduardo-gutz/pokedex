import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderRate'
})
export class GenderRatePipe implements PipeTransform {
  baseRate: number = 12.5

  transform(value: number): string {
    const femaleRate = this.baseRate * value
    const maleRate = 100 - femaleRate
    return value < 0 ? 'Genderless' : `${maleRate}% M | ${femaleRate}% F`;
  }

}
