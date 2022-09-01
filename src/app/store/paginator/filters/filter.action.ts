import { createAction, props } from "@ngrx/store";
import { TypeResponse } from "src/app/interfaces/types.interface";

export const filterType = createAction('filterType', props<{filterByType: TypeResponse | undefined}>());