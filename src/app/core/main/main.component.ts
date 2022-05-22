import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MainState } from '../../main.reducer';
import { Item } from '../../models/item.model';
import { selectTodos } from '../../store/todoState/todo.selectors';
import { editMultiTodo } from '../../store/todoState/todos.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  todos$   : Observable<Item[]> = this.store.select(selectTodos);
  todosSubs: Subscription = new Subscription();
  todos    : Item[]= []
  allCompleted: boolean = false;

  constructor( private store: Store<MainState>) { }


  ngOnInit(): void {
    this.todosSubs = this.todos$.subscribe(todos => {
      this.todos = todos;
      this.checkAllCompleted();
      });
  }

  trackByFn = (index: number, item: any) => index;

  test(){

console.log(this.allCompleted);

    this.saveAllCompleted();
  }

  saveAllCompleted = () => this.store.dispatch(editMultiTodo({item: this.todos, completed: !this.allCompleted}));

  checkAllCompleted = (): boolean => (this.todos.length > 0) ? this.allCompleted = this.todos.every(todo => todo.completed) : false;


  ngOnDestroy(): void {
    this.todosSubs?.unsubscribe();
  }

}
