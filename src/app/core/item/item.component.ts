import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from '../../main.reducer';
import { Item } from '../../models/item.model';
import { deleteTodo, editTodo } from '../../store/todoState/todos.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: Item = new Item('newItem');
  @Input() index!: number;

  public text: string = '';
  public edit: boolean = false;
  private originalText: string = '';
  constructor(private store: Store<MainState>) { }

  completed = () => {
    this.store.dispatch(editTodo({item: {...this.item, completed: !this.item.completed}}));
    this.setFocus('#inputheader');
  };

  delete = () => this.store.dispatch(deleteTodo({id: this.item.id}));

  editMode = ( text:string) =>{
    this.originalText = text;
    this.text = text;
    this.edit = true;
    this.setFocus(`#item${this.index}`);
  }

  cancelEdit = () =>{
    this.edit = false;
    this.text = this.originalText;
  }

  ckeckStringContent = (str: string): boolean =>  str.trim().length <= 0;

  saveEdit  = () => {
    if(!this.edit) return
    if((this.text === '' || this.ckeckStringContent(this.text))) this.delete();
    else {
      this.store.dispatch(editTodo({item: {...this.item, text: this.text}}));
      this.edit = false;
    }
    this.setFocus('#inputheader');
  }

  setFocus = (id:string) => {
    setTimeout(() => {
      const element =   document.getElementById(id) as HTMLInputElement;
      element.focus();
    }, 0);
  }
}
