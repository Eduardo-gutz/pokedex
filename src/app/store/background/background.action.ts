import { createAction, props } from '@ngrx/store';
import { PokemonDetails } from 'src/app/interfaces/pokemon.inteface';

export const backgroundColor = createAction('background', props<{background: string}>());