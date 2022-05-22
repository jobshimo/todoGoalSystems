import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MAIN_REDUCER } from '../main.reducer';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../../environments/environment.prod';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { Item } from '../models/item.model';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(MAIN_REDUCER),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
      ],
    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Comprueba que se crea un nuevo item en la DB', async () => {
    service.collectionEndPoint = 'test';
    let check = false;
    const set = service.setItem(new Item('test','001', false)).then(() => check = true).catch(() => check = false);
    await set;
    expect(check).toBeTruthy();
  });
  it('Comprueba que se actualiza un item de la DB', async () => {
    service.collectionEndPoint = 'test';
    let check = false;
    const set = service.setItem(new Item('testUpdate','001', true)).then(() => check = true).catch(() => check = false);
    await set;
    expect(check).toBeTruthy();
  });
  it('Comprueba que se obtienen los items de la DB', async () => {
    service.collectionEndPoint = 'test';
    let check = false;
    const set = service.getAllTodoItems().then(() => check = true).catch(() => check = false);
    await set;
    expect(check).toBeTruthy();
  });
  it('Comprueba que se borra un item de la DB', async () => {
    service.collectionEndPoint = 'test';
    let check = false;
    const set = service.deleteItem('001').then(() => check = true).catch(() => check = false);
    await set;
    expect(check).toBeTruthy();
  });
});
