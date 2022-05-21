import { Component, OnInit } from '@angular/core';
import { Item } from './models/item.model';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todoGoalSystems';

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    // this.firebaseService.setNewItem(new Item('test'));
    this.firebaseService.setItem( {
      completed: true,
      id:"aAIpTNLW4JAERYKD6s5Q",
      text: "Probando servicio"});
  }
}
