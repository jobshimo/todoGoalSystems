import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MainState } from '../../../main.reducer';
import { addTodo, setFilter } from '../../../store/todoState/todos.actions';
import { Item } from '../../../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private todos$    : Observable<Item[]> = this.store.select(state => state.todoState.todos);
  private todosSubs : Subscription = new Subscription();

  public todos  : Item[] = [];
  public text   : string = '';
  public filter : string | null = this.route.snapshot.paramMap.get('filter');

  constructor(private store: Store<MainState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(setFilter({filter: this.filter}));
    this.todosSubs = this.todos$.subscribe(todos =>  this.todos = todos);
  }

  ckeckStringContent = (str: string): boolean =>  str.trim().length > 0;

  saveNewItem = () => {
    if(this.text === '' || !this.ckeckStringContent(this.text))return;
    this.store.dispatch(addTodo({item: new Item(this.text)}));
    this.text = '';
  }

  ngOnDestroy(): void {
    this.todosSubs?.unsubscribe();
  }

}
