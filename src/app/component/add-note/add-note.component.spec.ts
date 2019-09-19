import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { AddNoteComponent } from './add-note.component';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {IconComponent} from '../../../../src/app/component/icon/icon.component';
import {AllNotesComponent} from '../../../../src/app/component/all-notes/all-notes.component'
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {NoteSearchPipePipe} from '../../../../src/app/pipe/note-search-pipe.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import {LabelComponent}  from '../../../app/component/label/label.component';
import {OrderOfPipe} from '../../../../src/app/pipe/order-of.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {DisplayLabelsComponent} from '../../../../src/app/component/display-labels/display-labels.component'
describe('AddNoteComponent', () => {
  let component: AddNoteComponent;
  let fixture: ComponentFixture<AddNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoteComponent,IconComponent,DisplayLabelsComponent,AllNotesComponent,NoteSearchPipePipe,LabelComponent,OrderOfPipe ],
      imports: [MatIconModule,MatDialogModule,MatSnackBarModule,HttpClientModule,MatProgressSpinnerModule,MatFormFieldModule,MatDividerModule,MatCardModule,FlexLayoutModule,MatCheckboxModule,MatChipsModule,FormsModule,MatTooltipModule,MatMenuModule,ReactiveFormsModule, RouterTestingModule.withRoutes([{ path: 'addNotes', component: AddNoteComponent }])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
