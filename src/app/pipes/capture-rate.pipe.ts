import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captureRate'
})
export class CaptureRatePipe implements PipeTransform {

  transform(value: number): string {
    const rate = (value * 100) / 255
    return `${rate.toFixed(1)}%`;
  }

}
