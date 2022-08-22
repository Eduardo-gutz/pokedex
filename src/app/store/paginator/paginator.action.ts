import { createAction, props } from '@ngrx/store';
import { PokemonDetails } from 'src/app/interfaces/pokemon.inteface';

export const paginatorPage = createAction('paginatorPage', props<{pageIndex: number}>());