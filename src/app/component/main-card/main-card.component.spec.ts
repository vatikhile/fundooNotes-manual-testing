import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardComponent } from './main-card.component';
// import { MatSnackBar } from '@angular/material';
import {placeOrder} from '../../core/model/addToCart/add-to-cart'
import {HttpServiceService} from '../../core/service/http/http-service.service'
// import  {NoteServiceService} from '../../core/service/note/note-service.service'
// import { FormControl, Validators } from '@angular/forms';
describe('MainCardComponent', () => {
  let component: MainCardComponent;
  let fixture: ComponentFixture<MainCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCardComponent,HttpServiceService ],
      // imports:[FormControl, Validators]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
