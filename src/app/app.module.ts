import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './store/pokemons/pokemon.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './views/home/home.module';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { ComponentsModule } from './components/components.module';
import { NgChartsModule } from 'ng2-charts';
import { backgroundReducer } from './store/background/background.reducer';
import { paginatorReducer } from './store/paginator/paginator.reducer';

@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonItemComponent,
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({pokemon: pokemonReducer, background: backgroundReducer, pageIndex: paginatorReducer}),
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    ComponentsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
