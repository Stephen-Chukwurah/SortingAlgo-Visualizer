import { createFeatureSelector, createSelector } from '@ngrx/store';
import { App } from './app.reducer';

export const featureSelector = createFeatureSelector<App>('app');
export const getData = createSelector(featureSelector, (app: App) => app.data);
export const getDataSize = createSelector(featureSelector, (app: App) => app.dataSize);
export const getCurrentPane = createSelector(featureSelector, (app: App) => app.currentPane);
export const getIsSorting = createSelector(featureSelector, (app: App) => app.isSorting);


export const query = {
  getData,
  getDataSize,
  getCurrentPane,
  getIsSorting
};
