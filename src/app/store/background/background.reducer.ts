import { createReducer, on } from '@ngrx/store';
import { backgroundColor } from './background.action';

export const initialState: string = '#FFF';

export const backgroundReducer = createReducer(
    initialState,
    on(backgroundColor, (state, { background }) => background)
);