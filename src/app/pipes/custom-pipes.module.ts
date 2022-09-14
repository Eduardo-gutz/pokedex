import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightPipe } from './height.pipe';
import { WeightPipe } from './weight.pipe';
import { GenderRatePipe } from './gender-rate.pipe';
import { CaptureRatePipe } from './capture-rate.pipe';



@NgModule({
  declarations: [
    HeightPipe,
    WeightPipe,
    GenderRatePipe,
    CaptureRatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeightPipe,
    WeightPipe,
    GenderRatePipe,
    CaptureRatePipe,
  ]
})
export class CustomPipesModule { }
