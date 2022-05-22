import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from './main.reducer';
import { getTodos } from './store/todoState/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<MainState>) {}

  ngOnInit(): void {
    this.store.dispatch(getTodos())
  }
}
