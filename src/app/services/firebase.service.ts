import { Injectable } from '@angular/core';
import { collection, doc, Firestore, getDocs, getFirestore, setDoc } from '@angular/fire/firestore';
import { deleteDoc, query } from 'firebase/firestore';
import { Item } from '../models/item.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db : Firestore,) { }


    // ********For testing purposes********//
    private collection: string = 'todos'

    set collectionEndPoint(collection: string) {
      this.collection = collection;
    }

    get collectionEndPoint(): string {
      return this.collection;
    }
    //********End********/

    //Function to generate a unique id//
    generateFirestoreId = () : string => doc(collection(this.db, this.collection)).id;

    //Function to set a new document//
    setNewItem = ( item: Item ) => {
      const id = this.generateFirestoreId();
      const newTodo = doc( getFirestore(), this.collection, id );
      return setDoc( newTodo, { ...item, id }, { merge: true });
    };

    //Function to set a document//
    setItem = ( item: Item ) => {
      const newTodo = doc( getFirestore(), this.collection, item.id);
      return setDoc( newTodo, { ...item }, { merge: true });
    };

    //Function to set multiple documents//
    setMultipleItems = ( item: Item[]) => item.forEach(( item ) => this.setNewItem({...item}));

    //Function to get multiple documents with a custom model//
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

    //Function to delete a document//
    deleteItem = async ( item: Item ) => await deleteDoc( doc( getFirestore(), this.collection, item.id ));

    //Function to delete multiple documents//
    deleteMultipleItems = ( item: Item[] ) =>  item.forEach(( item ) => this.deleteItem({...item}).then(() => console.log('deleted')));
}
