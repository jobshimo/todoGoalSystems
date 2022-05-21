import {  createAction, props } from '@ngrx/store';

export enum Types {
  ALL_COMPLETED   = '[App State] All Completed: change',
  MAIN_AND_FOOTER = '[App State] Main and Footer: Hide/Show',
}

export const allCompleted  = createAction(Types.ALL_COMPLETED, props<{ allCompleted: boolean }>() );
export const mainAndFooter = createAction(Types.MAIN_AND_FOOTER, props<{ mainAndFooter: boolean }>() );
