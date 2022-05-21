import { Item } from '../../models/item.model';

export interface TodoState {
  todos      : Item[],
  editMode   : boolean,
  editedItem : Item | null,
}

export const initialState: TodoState = {
  todos      : [],
  editMode   : false,
  editedItem : null,
};
