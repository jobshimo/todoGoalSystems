import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MainState } from '../../main.reducer';
import { selectTodos, selectTodosFilter } from '../../store/todoState/todo.selectors';
import { editMultiTodo } from '../../store/todoState/todos.actions';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private todos$    : Observable<Item[]> = this.store.select(selectTodos);
  private todosSubs : Subscription = new Subscription();
  private filter$   : Observable<string | null> = this.store.select(selectTodosFilter);
  private filter    : string | null = null;
  private todos     : Item[]= []

  public todosfilter  : Item[] = []
  public allCompleted : boolean = false;

      // ********Para testing********//
      set todosSet(todos: Item[]) {
        this.todos = todos;
      }
      testcheckAllCompleted = () =>  this.checkAllCompleted();
      //********Fin********/

  constructor( private store: Store<MainState>) { }

  ngOnInit(): void {
    this.todosSubs = this.todos$.pipe(
      switchMap(todos=> {
       this.todos = todos;
       this.checkAllCompleted();
       return this.filter$;
      })
      ).subscribe(filter => {
        this.filter = filter;
        this.todosfilter = this.getFilterTodos(this.filter);
        });
  }

  trackByFn = (index: number, item: any) => index;

  saveAllCompleted = () => this.store.dispatch(editMultiTodo({item: this.todos, completed: !this.allCompleted}));

  private checkAllCompleted = (): boolean => (this.todos.length > 0) ? this.allCompleted = this.todos.every(todo => todo.completed) : this.allCompleted = true;

  getFilterTodos = (filter: string | null): Item[] =>  [...[...this.todos].filter(todo => filter != 'all' ? (filter === 'pending') ? !todo.completed: todo.completed: todo )];

  ngOnDestroy(): void {
    this.todosSubs?.unsubscribe();
  }

}
