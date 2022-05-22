import { Item } from '../../models/item.model';

export interface TodoState {
  todos      : Item[],
  error      : any,
  loading    : boolean,
  filter     : string | null,
}

export const initialTodoState: TodoState = {
  todos      : [],
  error      : null,
  loading    : false,
  filter     : 'all',
};
