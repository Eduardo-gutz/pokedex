import { createReducer, on } from '@ngrx/store';
import { PokemonDetails } from 'src/app/interfaces/pokemon.inteface';
import { paginatorPage } from './paginator.action';

export const initialState: number = 0;

export const paginatorReducer = createReducer(
    initialState,
    on(paginatorPage, (state, { pageIndex }) => pageIndex)
);