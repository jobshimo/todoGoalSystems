import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from '../../main.reducer';
import { Observable, Subscription } from 'rxjs';
import { Item } from '../../models/item.model';
import { deleteMultiTodo, setFilter } from '../../store/todoState/todos.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  private todos$    : Observable<Item[]> = this.store.select(state => state.todoState.todos);
  private todosSubs : Subscription = new Subscription();
  private todos     : Item[] = [];
  pending : number = 0;

  constructor(private store: Store<MainState>) { }

  ngOnInit(): void {
    this.todosSubs = this.todos$.subscribe(todos => {
      this.todos = todos;
      this.pending = this.getPending(todos)
    });
  }

  clearCompleted = ()=> this.store.dispatch(deleteMultiTodo({todos: this.getCompletedTodos()}))

  private getPending = (todos: Item[]) => todos.filter(todo => !todo.completed).length;

  private getCompletedTodos = (): Item[] =>  [...[...this.todos].filter(todo => todo.completed )];

  setfilter = (filter: string) => this.store.dispatch(setFilter({filter}))

  ngOnDestroy(): void {
    this.todosSubs?.unsubscribe();
  }

}
