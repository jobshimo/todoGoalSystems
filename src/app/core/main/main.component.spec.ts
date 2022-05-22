import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MAIN_REDUCER } from '../../main.reducer';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment.prod';
import { Item } from 'src/app/models/item.model';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(MAIN_REDUCER),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
      ],
      declarations: [ MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Comprobar que todos los items estan completados', () => {
    component.todosSet = [new Item('test1','newItem',true), new Item('test2','newItem',true), new Item('test3','newItem',true)]
    component.testcheckAllCompleted();
    expect(component.allCompleted).toBeTruthy();
  });
  it('Comprobar que no todos los items estan completados', () => {
    component.todosSet = [new Item('test1'), new Item('test2','newItem',true), new Item('test3','newItem',true), ];
    component.testcheckAllCompleted();
    expect(component.allCompleted).toBeFalsy();
  });
});
