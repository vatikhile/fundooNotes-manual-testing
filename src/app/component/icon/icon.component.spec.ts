import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
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
import { AllNotesComponent } from '../all-notes/all-notes.component';


describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconComponent, AllNotesComponent ],
      imports : [MatCardModule, FormsModule, MatButtonModule,ReactiveFormsModule, MatFormFieldModule, ,MatIconModule,HttpClientModule,
        MatInputModule,BrowserAnimationsModule,RouterTestingModule, RouterModule, BrowserModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
