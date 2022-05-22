import { Item } from '../../models/item.model';

export interface TodoState {
  todos      : Item[],
  editMode   : boolean,
  editedItem : Item | null,
  error      : any,
  loading    : boolean,
  multiLoad  : boolean,
}

export const initialTodoState: TodoState = {
  todos      : [],
  editMode   : false,
  editedItem : null,
  error      : null,
  loading    : false,
  multiLoad  : false,
};
