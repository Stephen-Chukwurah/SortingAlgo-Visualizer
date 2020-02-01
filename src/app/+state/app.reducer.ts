import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './app.actions';

export interface App {
  data: Bar[];
  dataSize: number;
  currentPane: Pane;
  isSorting: boolean;
}

export interface EntityState {
  readonly app: App;
}

export const entityInitialState: App = {
  data: [],
  dataSize: null,
  currentPane: null,
  isSorting: false,
};

const reducer = createReducer(
  entityInitialState,
  on(Actions.loadCurrentPane, (state, action) => ({...state, currentPane: action.data})),
  on(Actions.loadData, (state, action) => ({...state, data: action.data})),
  on(Actions.setDataSize, (state, action) => ({...state, dataSize: action.data})),
  // on(Actions.sortData, (state, action) => ({...state, data: null})),
  on(Actions.triggerIsSorting, (state, action) => ({...state, isSorting: true})),
  on(Actions.triggerNotSorting, (state, action) => ({...state, isSorting: false})),
);

export function appReducer(
  state: App | undefined,
  action: Action
): App {
  return reducer(state, action);
}
