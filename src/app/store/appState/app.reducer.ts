import { createReducer, on } from '@ngrx/store';
import { AppState, initialState } from './app.state';
import { allCompleted, mainAndFooter } from './app.actions';

export const AppStateReducer = createReducer(
  initialState,
  on(allCompleted, (state: AppState, {allCompleted}) => ({ ...state,  allCompleted })),
  on(mainAndFooter, (state: AppState, {mainAndFooter}) => ({ ...state,  main: mainAndFooter,  footer: mainAndFooter, })),
  );




