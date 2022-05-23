import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment.prod';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MAIN_REDUCER } from '../../main.reducer';
import { Item } from 'src/app/models/item.model';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(MAIN_REDUCER),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
      ],
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Comprueba que se obtiene el numero de items pendientes', () => {
    component.todosSet = [new Item('test1'), new Item('test2'), new Item('test3','newItem',true), ];
    const pending = 2;
    const todos = component.todosGet;
    expect(component.testGetPending(todos) === pending).toBeTruthy();
  });

  it('Comprueba que se obtiene el numero de items completados', () => {
    component.todosSet = [new Item('test1'), new Item('test2'), new Item('test3','newItem',true), ];
    const completed = 1;
    const todos = component.todosGet;
    expect(component.testCompleted(todos) === completed).toBeTruthy();
  });

  it('Comprueba que se obtiene un nuevo array con los items compeltados', () => {
    component.todosSet = [new Item('test1'), new Item('test2','newItem',true), new Item('test3','newItem',true), ];
    const completed = 2;
    const todosCompleted = component.testGetCompletedTodos();
    expect(todosCompleted.every(todo =>todo.completed) && todosCompleted.length === completed).toBeTruthy();
  });
});
