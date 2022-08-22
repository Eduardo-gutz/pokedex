import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { NgChartsModule } from 'ng2-charts';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonStatsBarComponent } from './pokemon-stats-bar/pokemon-stats-bar.component';
import { AuraComponent } from './aura/aura.component';
import { DividerComponent } from './divider/divider.component';
import { ButtonBackComponent } from './button-back/button-back.component';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    ChipComponent,
    PokemonStatsComponent,
    PokemonStatsBarComponent,
    AuraComponent,
    DividerComponent,
    ButtonBackComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgChartsModule
  ],
  exports: [
    ChipComponent,
    PokemonStatsComponent,
    PokemonStatsBarComponent,
    AuraComponent,
    DividerComponent,
    ButtonBackComponent,
    LoaderComponent
  ]
})
export class ComponentsModule { }
