import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FirebaseService } from './services/firebase.service';
import { MainState } from './main.reducer';
import { getTodos } from './store/todoState/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private firebaseService: FirebaseService, private store: Store<MainState>) {}

  ngOnInit(): void {

    // this.store.dispatch(getTodos())
    // this.firebaseService.setNewItem(new Item('test'));
    this.store.dispatch(getTodos())
    // setTimeout(() => {

    // }, 2000);
    // this.firebaseService.setItem( {
    //   completed: true,
    //   id:"aAIpTNLW4JAERYKD6s5Q",
    //   text: "Probando servicio"});
  }
}
