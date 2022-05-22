import { createReducer, on } from '@ngrx/store';
import { initialTodoState, TodoState } from './todo.state';
import * as todoActions from './todos.actions';

export const TodoStateReducer = createReducer(
  initialTodoState,
  on(todoActions.getTodos, (state: TodoState ) => ({ ...state, loading: true })),
  on(todoActions.getTodosSuccess, (state: TodoState, {todos} ) => ({ ...state, todos, loading: false })),
  on(todoActions.getTodosError, (state: TodoState, {error} ) => ({ ...state, error, loading: false })),

  on(todoActions.addTodo, (state: TodoState, {item} ) => ({ ...state, loading: true })),
  on(todoActions.addTodoSuccess, (state: TodoState ) => ({ ...state, loading: false })),
  on(todoActions.addTodoError, (state: TodoState, {error} ) => ({ ...state, error, loading: false })),

  on(todoActions.deleteTodo, (state: TodoState, {id} ) => ({ ...state, loading: true })),
  on(todoActions.deleteTodoSuccess, (state: TodoState ) => ({ ...state, loading: false })),
  on(todoActions.deleteTodoError, (state: TodoState, {error} ) => ({ ...state, error, loading: false })),

  on(todoActions.editTodo, (state: TodoState, {item} ) => ({ ...state, loading: true })),
  on(todoActions.editTodoSuccess, (state: TodoState ) => ({ ...state, loading: false })),
  on(todoActions.editTodoError, (state: TodoState, {error} ) => ({ ...state, error, loading: false })),
  on(todoActions.editMultiTodo, (state: TodoState, {item,completed} ) => ({ ...state, multiLoad: true })),

  on(todoActions.setFilter, (state: TodoState, {filter} ) => ({ ...state, filter })),
  );



