import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.state';


export const selectTodoState     = createFeatureSelector<TodoState>('todoState');
export const selectTodos         = createSelector( selectTodoState, (state: TodoState ) => state.todos);
export const selectTodosLoading  = createSelector( selectTodoState, (state: TodoState ) => state.loading);
export const selectTodosEditMode = createSelector( selectTodoState, (state: TodoState ) => state.editMode);
