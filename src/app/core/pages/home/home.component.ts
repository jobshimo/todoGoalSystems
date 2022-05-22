import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from '../../../main.reducer';
import { Item } from '../../../models/item.model';
import { addTodo, setFilter } from '../../../store/todoState/todos.actions';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private todos$    : Observable<Item[]> = this.store.select(state => state.todoState.todos);
  private todosSubs : Subscription = new Subscription();

  todos : Item[] = [];
  text  :  string = '';
  filter : string | null = this.route.snapshot.paramMap.get('filter');
  constructor(private store: Store<MainState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(setFilter({filter: this.filter}));
    this.todosSubs = this.todos$.subscribe(todos =>  this.todos = todos);
  }

  saveNewItem = () => {
    this.store.dispatch(addTodo({item: new Item(this.text)}));
    this.text = '';
  }

  ngOnDestroy(): void {
    this.todosSubs?.unsubscribe();
  }

}
