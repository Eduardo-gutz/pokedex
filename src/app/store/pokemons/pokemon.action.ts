import { createAction, props } from '@ngrx/store';
import { PokemonDetails } from 'src/app/interfaces/pokemon.inteface';

export const savePokemons = createAction('[Pokemon Component] SavePokemon', props<{pokemon: PokemonDetails}>());