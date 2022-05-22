export interface ItemModel {
  id        : string,
  text      : string;
  completed : boolean;
}


export class Item implements ItemModel {
  constructor( public text: string, public id: string  = 'newItem', public completed: boolean = false ) {  }
}
