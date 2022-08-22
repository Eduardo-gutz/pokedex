import { createReducer, on } from '@ngrx/store';
import { PokemonDetails } from 'src/app/interfaces/pokemon.inteface';
import { savePokemons } from './pokemon.action';

export const initialState: PokemonDetails[] = [];

export const pokemonReducer = createReducer(
  initialState,
  on(savePokemons, (state, { pokemon }) => [...state, pokemon])
);