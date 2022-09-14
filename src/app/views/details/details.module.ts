import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { MaterialModule } from 'src/app/material.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeightPipe } from 'src/app/pipes/height.pipe';
import { WeightPipe } from 'src/app/pipes/weight.pipe';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';


@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    MaterialModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipesModule
  ]
})
export class DetailsModule { }
