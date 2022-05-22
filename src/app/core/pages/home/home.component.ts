import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from '../../../main.reducer';
import { Item } from '../../../models/item.model';
import { addTodo } from '../../../store/todoState/todos.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  text: string = ''

  constructor(private store: Store<MainState>) { }



  ngOnInit(): void {
  }

  saveNewItem = () => {
    this.store.dispatch(addTodo({item: new Item(this.text)}));
    this.text = '';}

  ngOnDestroy(): void {
  }

}
