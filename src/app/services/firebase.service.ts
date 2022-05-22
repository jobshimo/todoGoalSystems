import { Injectable } from '@angular/core';
import { collection, doc, Firestore, getDocs, getFirestore, setDoc } from '@angular/fire/firestore';
import { deleteDoc, query } from 'firebase/firestore';
import { Item } from '../models/item.model';
import { Store } from '@ngrx/store';
import { MainState } from '../main.reducer';
import { editTodo, deleteTodo } from '../store/todoState/todos.actions';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db : Firestore, private store: Store<MainState>) { }


    // ********Para testing********//
    private collection: string = 'todos'

    set collectionEndPoint(collection: string) {
      this.collection = collection;
    }

    get collectionEndPoint(): string {
      return this.collection;
    }
    //********Fin********/

    generateFirestoreId = () : string => doc(collection(this.db, this.collection)).id;

    setNewItem = ( item: Item ) => {
      const id = new Date().getTime().toString() + this.generateFirestoreId();
      const newTodo = doc( getFirestore(), this.collection, id );
      return setDoc( newTodo, { ...item, id }, { merge: true });
    };

    setItem = ( item: Item ) => {
      const newTodo = doc( getFirestore(), this.collection, item.id);
      return setDoc( newTodo, { ...item }, { merge: true });
    };

    setMultipleItemsAllCompleted = async ( item: Item[], completed: boolean) =>  item.forEach(( item ) => this.store.dispatch(editTodo({item: {...item, completed: completed}})));

    getAllTodoItems = async ( ) =>{
      const todosCollection = collection(getFirestore(), this.collection);
      const q = query(todosCollection);
      let documents: Item[] = [];
      const queryCollection = await getDocs(q);
       queryCollection.forEach( doc => {
         let  { id, text, completed } = doc.data();
         documents.push(new Item( text, id, completed  ));
       });
      return documents;
    };

    deleteItem = async ( id: string ) => await deleteDoc( doc( getFirestore(), this.collection, id ));

    deleteMultipleItems = async ( item: Item[] ) =>  item.forEach(( item ) => this.store.dispatch(deleteTodo({id: item.id})));
}
