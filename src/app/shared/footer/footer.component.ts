import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { MainState } from '../../main.reducer';
import { deleteMultiTodo, setFilter } from '../../store/todoState/todos.actions';
import { selectTodos, selectTodosFilter } from '../../store/todoState/todo.selectors';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  private todos$     : Observable<Item[]> = this.store.select(selectTodos);
  private todosSubs  : Subscription = new Subscription();
  private todos      : Item[] = [];
  private filter$    : Observable<string | null> = this.store.select(selectTodosFilter);
  private filterSubs : Subscription = new Subscription();

  public filter    : string | null = null;
  public pending   : number = 0;
  public completed : number = 0;

      // ********Para testing********//
      set todosSet(todos: Item[]) {
        this.todos = todos;
      }

      get todosGet(): Item[] {
        return this.todos;
      }

      testGetPending = (todos: Item[]) =>  this.getPending(todos);
      testCompleted  = (todos: Item[]) =>  this.getCompleted(todos);
      testGetCompletedTodos = () =>  this.getCompletedTodos();
      //********Fin********/

  constructor(private store: Store<MainState>) { }

  ngOnInit(): void {
    this.todosSubs = this.todos$.subscribe(todos => {
      this.todos = todos;
      this.pending = this.getPending(todos);
      this.completed = this.getCompleted(todos);
    });
    this.filterSubs = this.filter$.subscribe(filter => this.filter = filter);
  }

  clearCompleted = ()=> this.store.dispatch(deleteMultiTodo({todos: this.getCompletedTodos()}))

  private getPending = (todos: Item[]) => todos.filter(todo => !todo.completed).length;

  private getCompleted = (todos: Item[]) => todos.filter(todo => todo.completed).length;

  private getCompletedTodos = (): Item[] =>  [...[...this.todos].filter(todo => todo.completed )];

  setfilters = (filter: string) => this.store.dispatch(setFilter({filter}))

  ngOnDestroy(): void {
    this.todosSubs?.unsubscribe();
    this.filterSubs?.unsubscribe();
  }

}
