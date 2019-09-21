import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLabelsComponent } from './display-labels.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import {IconComponent} from '../../../../src/app/component/icon/icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

describe('DisplayLabelsComponent', () => {
  let component: DisplayLabelsComponent;
  let fixture: ComponentFixture<DisplayLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLabelsComponent ,IconComponent],
      imports: [MatChipsModule,MatDialogModule,MatSnackBarModule,HttpClientModule,MatTooltipModule,MatCheckboxModule,MatIconModule,FlexLayoutModule,MatMenuModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
