import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { PokemonDetails, Type } from 'src/app/interfaces/pokemon.inteface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { savePokemons } from 'src/app/store/pokemons/pokemon.action';

import typesColor from '../../../environments/typesColors';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() url: string = '';
  @Input() name: string = '';

  pokemonsList$: Observable<PokemonDetails[]>;

  pokemon: PokemonDetails | null = null
  pokemonID: number = 0
  border: string = ''
  pokemonNumber: string = '#001'
  textColor: string = ''
  typesColors: any = typesColor

  constructor(private pokemonDetailsServ: PokemonService, private store: Store<{pokemon: PokemonDetails[]}>) {
    this.pokemonsList$ = this.store.pipe(select('pokemon'))
  }

  ngOnInit(): void {
    this.pokemonID = Number(this.url.split('/')[6])

    this.pokemonsList$.pipe(take(1)).subscribe((pokemons) => {
      const pokemonById = pokemons?.find((pokemon) => pokemon.id === this.pokemonID)
      if(pokemonById) {        
        this.getTypeColor(pokemonById.types)
        this.getPokemonNumber(pokemonById.id)
        this.pokemon = pokemonById
      } else {
        this.pokemonDetailsServ.getPokemon(this.pokemonID).subscribe((details) => {
          this.getTypeColor(details.types)
          this.getPokemonNumber(details.id)

          this.store.dispatch(savePokemons({pokemon: details}))
          this.pokemon = details
        })
      }
    })
    
  }

  getTypeColor(types: Type[]) {
    const colors = types.map((type) => (typesColor as any)[type.type.name])
    this.textColor = `color: ${colors[0]}44`
  }

  getPokemonNumber(id = 1) {
    if(id < 10) {
      this.pokemonNumber = `#00${id}`
    } else if(id >= 10 && id < 100) {
      this.pokemonNumber = `#0${id}`
    } else {
      this.pokemonNumber = `#${id}`
    }
  }

}
