import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotesComponent } from './edit-notes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NoteServiceService } from '../../core/service/note/note-service.service';
// import { MatSnackBar } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UpdateServiceService } from '../../core/service/update/update-service.service'
describe('EditNotesComponent', () => {
  let component: EditNotesComponent;
  let fixture: ComponentFixture<EditNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNotesComponent,NoteServiceService,UpdateServiceService ],
      imports:[FlexLayoutModule,MatButtonModule,MatTooltipModule,MAT_DIALOG_DATA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
