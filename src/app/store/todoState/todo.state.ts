import { Item } from '../../models/item.model';

export interface TodoState {
  todos      : Item[],
  editMode   : boolean,
  error      : any,
  loading    : boolean,
  filter     : string | null,
}

export const initialTodoState: TodoState = {
  todos      : [],
  editMode   : false,
  error      : null,
  loading    : false,
  filter     : 'all',
};
