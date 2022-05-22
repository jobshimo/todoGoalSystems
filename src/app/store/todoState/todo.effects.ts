import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, of } from "rxjs";
import { catchError, map, switchMap, take } from "rxjs/operators";
import { FirebaseService } from '../../services/firebase.service';
import { getTodos, getTodosSuccess, getTodosError, editTodo, editTodoSuccess, editTodoError, deleteTodo, deleteTodoSuccess, deleteTodoError, editMultiTodo, addTodo, addTodoSuccess, addTodoError } from './todos.actions';


@Injectable()

export class TodosEffects {

    constructor( private actions$       : Actions,
                 private firebaseService: FirebaseService){};

    getTodos$ = createEffect( () =>
      this.actions$.pipe(
        ofType( getTodos ),
        switchMap( () =>  from( this.firebaseService.getAllTodoItems()).pipe(
         take( 1 ),
         map( todos  => getTodosSuccess({ todos }) ),
         catchError( error => of( getTodosError({ error }))),
        ),
       ),
      ),
    );
    newTodo$ = createEffect( () =>
    this.actions$.pipe(
      ofType( addTodo ),
      switchMap( ({item}) =>  from( this.firebaseService.setNewItem(item)).pipe(
       take( 1 ),
       map( () => addTodoSuccess() ),
       catchError( error => of( addTodoError({ error }))),
      ),
     ),
    ),
  );

    editTodo$ = createEffect( () =>
      this.actions$.pipe(
        ofType( editTodo ),
        switchMap( ({item}) =>  from( this.firebaseService.setItem(item)).pipe(
         take( 1 ),
         map( () => editTodoSuccess() ),
         catchError( error => of( editTodoError({ error }))),
        ),
       ),
      ),
    );

    deleteTodo$ = createEffect( () =>
    this.actions$.pipe(
        ofType( deleteTodo ),
        switchMap( ({id}) =>  from( this.firebaseService.deleteItem(id)).pipe(
         take( 1 ),
         map( () => deleteTodoSuccess() ),
         catchError( error => of( deleteTodoError({ error }))),
        ),
       ),
      ),
    );
    allCompleted$ = createEffect( () =>
    this.actions$.pipe(
        ofType( editMultiTodo ),
        switchMap( ({item,completed}) =>  from( this.firebaseService.setMultipleItemsAllCompleted(item, completed)).pipe(
         map( () => getTodos() ),
        ),
       ),
      ),
    );

    reloadTodos$ = createEffect( () =>
      this.actions$.pipe(
        ofType( editTodoSuccess, deleteTodoSuccess, addTodoSuccess ),
         map( () => getTodos())
       ),
    );


//      setNoteData$ = createEffect( () =>
//      this.actions$.pipe(
//       ofType( setAllNotesData ),
//       switchMap( ({ note }) =>  from(this.firebaseService.setNotes( note )).pipe(
//        take(1),
//        map( () => setAllNotesDataSuccess() ),
//         catchError(error => of( setAllNotesDataError({ error })))
//       ),
//     ),
//   ),
//  );

//      goHome$ = createEffect( () =>
//      this.actions$.pipe(
//       ofType( setAllNotesDataSuccess, setAllNotesDataError ),
//       map(() => {
//        this.router.navigate(['/home']);
//        return goHome();
//       }
//      ),
//     ),
//   );

//   deleteNote$ = createEffect( () =>
//      this.actions$.pipe(
//       ofType( deleteNote ),
//       switchMap( ({ note }) =>  from( this.firebaseService.deleteNote( note )).pipe(
//        take(1),
//        map( () => deleteNoteSuccess() ),
//         catchError(error => of( deleteNoteError({ error })))
//       ),
//     ),
//   ),
//  );
};

