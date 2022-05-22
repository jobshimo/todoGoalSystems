import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MAIN_REDUCER } from '../main.reducer';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../../environments/environment.prod';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

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
});
