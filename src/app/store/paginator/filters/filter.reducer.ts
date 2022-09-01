import { createReducer, on } from '@ngrx/store';
import { TypeResponse } from 'src/app/interfaces/types.interface';
import { filterType } from './filter.action';

export let initialState: TypeResponse | undefined;

export const filterTypeReducer = createReducer(
    initialState,
    on(filterType, (state, { filterByType }) => filterByType)
);