import { AppState } from "./store/appState/app.state";
import { ActionReducerMap } from '@ngrx/store';
import { AppStateReducer } from "./store/appState/app.reducer";
import { TodoState } from './store/todoState/todo.state';
import { TodoStateReducer } from './store/todoState/todo.reducer';


export interface MainState {
    appState : AppState,
    todoState: TodoState
};

export const MAIN_REDUCER : ActionReducerMap<MainState> = {
    appState : AppStateReducer,
    todoState: TodoStateReducer
};
