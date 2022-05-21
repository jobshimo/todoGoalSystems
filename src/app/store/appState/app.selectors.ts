import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('appState');
export const selectAllCompleted = createSelector( selectAppState, (state: AppState ) => state.allCompleted);
export const selectFooter       = createSelector( selectAppState, (state: AppState ) => state.footer);
export const selectMain         = createSelector( selectAppState, (state: AppState ) => state.main);

