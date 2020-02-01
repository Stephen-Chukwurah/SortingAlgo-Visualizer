import { createAction, props } from '@ngrx/store';

export const loadCurrentPane = createAction(
  '[APP] LOAD_CURRENT_PANE',
  props<{ data: Pane }>()
);

export const loadData = createAction(
  '[APP] LOAD_DATA',
  props<{ data: Bar[] }>()
);

export const setDataSize = createAction(
  '[APP] SET_DATA_SIZE',
  props<{ data: number }>()
);

export const sortData = createAction(
  '[APP] SORT_DATA',
  props<{ data: {currentPane: Pane} }>()
);

export const triggerIsSorting = createAction(
  '[APP] TRIGGER_IS_SORTING',
)

export const triggerNotSorting = createAction(
  '[APP] TRIGGER_NOT_SORTING',
)


