import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponent } from './label.component';
import {  MatDialogRef } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { RouterTestingModule } from '@angular/router/testing';
import { NoteServiceService } from '../../core/service/note/note-service.service'
// import { Label } from 'src/app/core/model/label/label';
import { Label} from '../../core/model/label/label'
import { MatSnackBar } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { UpdateServiceService } from '../../core/service/update/update-service.service'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelComponent,NoteServiceService ,Label,DashboardComponent],
      imports:[MatDialogRef,MatIconModule,MatDividerModule,MatSnackBar,MatButtonModule,UpdateServiceService, RouterTestingModule.withRoutes([{ path: '', component: DashboardComponent }])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
