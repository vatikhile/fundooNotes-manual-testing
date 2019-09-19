import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule } from '@angular/material';
import { MatFormField } from '@angular/material';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from 'selenium-webdriver';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuardService } from 'src/app/core/service/auth/auth-guard.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // let router: Router=[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      // FormsModule, MatButtonModule,ReactiveFormsModule, MatFormFieldModule, ,MatIconModule,HttpClientModule,
      //    MatInputModule,BrowserAnimationsModule,RouterTestingModule, RouterModule, BrowserModule
      imports: [MatCardModule, FormsModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, HttpClientModule,
        RouterTestingModule.withRoutes([{ path: 'login', component: LoginComponent }]), RouterModule, RouterModule, BrowserModule, MatSnackBarModule],

      //providers: [AuthGuardService, { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs } ],
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
      });;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Invalidation for name field', async(() => {
    component.email.setValue(' ');
    expect(component.email.valid).toBeFalsy();
  }));

  it('Invalidation for name field', async(() => {
    component.email.setValue('vaibhawatikhile@gmail.com');
    expect(component.email.valid).toBeTruthy();
  }));

});
