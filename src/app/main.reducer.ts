import { ActionReducerMap } from '@ngrx/store';
import { TodoState } from './store/todoState/todo.state';
import { TodoStateReducer } from './store/todoState/todo.reducer';


export interface MainState {
    todoState: TodoState
};

export const MAIN_REDUCER : ActionReducerMap<MainState> = {
    todoState: TodoStateReducer
};
