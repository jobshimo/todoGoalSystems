import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { Store } from '@ngrx/store';
import { MainState } from '../../main.reducer';
import { deleteTodo, editTodo } from '../../store/todoState/todos.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!: Item;
  @Input() index!: number;

  text: string = ''
  edit: boolean = false
  constructor(private store: Store<MainState>) { }

  ngOnInit(): void {
    console.log(this.item);
  }

  completed = () => {
    this.store.dispatch(editTodo({item: {...this.item, completed: !this.item.completed}}));
    this.setFocus('#inputheader');
  };

  delete    = () => this.store.dispatch(deleteTodo({id: this.item.id}));

  editMode  = ( text:string) =>{
    this.text = text;
    this.edit = true;
    this.setFocus(`#item${this.index}`);
  };

  saveEdit  = () => {
    this.store.dispatch(editTodo({item: {...this.item, text: this.text}}));
    this.edit = false;
    this.setFocus('#inputheader');
  };

  setFocus = (id:string) => {
    setTimeout(() => {
      const element =   document.getElementById(id) as HTMLInputElement;
      element.focus();
    }, 0);
  };
}
