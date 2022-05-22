import {  createAction, props } from '@ngrx/store';
import { Item } from '../../models/item.model';

 enum Types {
  GET_TODOS           = '[Todo State] Get Todos',
  GET_TODOS_SUCCESS   = '[Todo State] Get Todos: Success',
  GET_TODOS_ERROR     = '[Todo State] Get Todos: Error',
  ADD_TODO            = '[Todo State] Add Todo',
  ADD_TODO_SUCCESS    = '[Todo State] Add Todo: Success',
  ADD_TODO_ERROR      = '[Todo State] Add Todo: Error',
  DELETE_TODO         = '[Todo State] Delete Todo',
  DELETE_TODO_SUCCESS = '[Todo State] Delete Todo: Success',
  DELETE_TODO_ERROR   = '[Todo State] Delete Todo: Error',
  EDIT_TODO           = '[Todo State] Edit Todo',
  EDIT_TODO_SUCCESS   = '[Todo State] Edit Todo: Success',
  EDIT_TODO_ERROR     = '[Todo State] Edit Todo: Error',
  EDIT_MULTI_TODOS    = '[Todo State] Edit Multi Todos',

}

export const getTodos        = createAction(Types.GET_TODOS);
export const getTodosSuccess = createAction(Types.GET_TODOS_SUCCESS, props<{ todos: Item[] }>() );
export const getTodosError   = createAction(Types.GET_TODOS_ERROR, props<{ error: any }>() );

export const addTodo        = createAction(Types.ADD_TODO, props<{ item: Item }>() );
export const addTodoSuccess = createAction(Types.ADD_TODO_SUCCESS );
export const addTodoError   = createAction(Types.ADD_TODO_ERROR, props<{ error: any }>() );

export const deleteTodo        = createAction(Types.DELETE_TODO, props<{ id: string }>() );
export const deleteTodoSuccess = createAction(Types.DELETE_TODO_SUCCESS );
export const deleteTodoError   = createAction(Types.DELETE_TODO_ERROR, props<{ error: any }>() );

export const editTodo         = createAction(Types.EDIT_TODO, props<{ item: Item }>() );
export const editTodoSuccess  = createAction(Types.EDIT_TODO_SUCCESS );
export const editTodoError    = createAction(Types.EDIT_TODO_ERROR, props<{ error: any }>() );
export const editMultiTodo    = createAction(Types.EDIT_MULTI_TODOS, props<{ item: Item[], completed: boolean }>() );


