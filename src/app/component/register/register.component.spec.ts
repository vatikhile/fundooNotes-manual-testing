import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from 'selenium-webdriver';
import { BrowserModule } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [MatCardModule, FormsModule, MatButtonModule,ReactiveFormsModule, MatFormFieldModule, ,MatIconModule,HttpClientModule,
        MatInputModule,BrowserAnimationsModule,RouterTestingModule, RouterModule, BrowserModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
