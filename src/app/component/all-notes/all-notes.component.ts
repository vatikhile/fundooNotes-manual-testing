import { Component, OnInit, Input } from '@angular/core';
import { NoteServiceService } from '../../core/service/note/note-service.service'
// import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { UpdateServiceService } from '../../../../src/app/core/service/update/update-service.service'
import { ViewService } from '../../../../src/app/core/service/viewService/view.service';
import { MatDialog } from '@angular/material';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
import { MatSnackBar } from '@angular/material';
import { LabelsService } from '../../core/service/labelService/labels.service'
import { loadLContextFromNode } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  addNotes: any[];
  Notes: any[];
  message: any;
  size: any;
  views: any;
  removable = true;
  toggle: boolean;
  setColor: any;
  archive: any;
  Id: any;
  @Input() note;
  @Input() notesData;
  @Input('master') searchText: any;

  countId: any;
  direction1: string = 'wrap';
  allign: string = '';
  direction: string = "row";
  setReminder: any;
  notesInfo: any;
  noteId: any;
  userId = localStorage.getItem(this.Id)
  user: string;
  itemId: any[];
  pinedCards: any[];
  label: boolean = true
  constructor(private noteService: NoteServiceService, private dataService: UpdateServiceService, private view: ViewService, private dialog: MatDialog, private snackbar: MatSnackBar, private label1: LabelsService) { }

  ngOnInit() {
    /*****
   @purpose:Display all notes without refreshing  the page
   ******/

    console.log("addNotes", this.label1.getnotes());

    this.getAllNotes();
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        console.log(response);
        this.message = response;
        this.getAllNotes();
      })

    /*****
   @purpose:If click on list view on the toolbar the service viewservice return the row text & again click on grid button it return column
   ******/
    this.view.getView().subscribe(

      (res) => {
        this.views = res;
        this.direction = this.views.data;
        if (this.direction == 'row') {
          this.direction1 = 'wrap';
          this.allign = ''
          console.log("wrap", this.direction1);
          // this.searchText=this.masterName

        }
        else {
          this.direction1 = ''
          this.allign = 'center'
          console.log("no wrap", this.direction1);
          // this.searchText=this.masterName
        }
        // this.toggle=this.views.data1;
        console.log(this.direction);
      });


  }

  /*****
 @purpose:for getting the note data i.e title and description from the database for displaying the created note
 ******/
  getAllNotes() {
    console.log("getAllNote");

    this.noteService.getNotes().subscribe(

      (response: any) => {

        this.notesInfo = response.data.data
        console.log("notesssss", this.notesInfo);

        if (response) {
          this.size = 12;
          console.log("size", this.size);

        }
        else {
          console.log("undefined addNotes");

        }
        // response.data.data.
        console.log('data notes -->', response);
        this.addNotes = response.data.data;

        console.log("=====", this.addNotes);

        // return this.addNotes.filter(data =>
        //   data.isPined=false)
        // || data.description.toLowerCase().indexOf(searchTerm) !== -1)
        this.noteId = response.data.data[0].id

      })


  }
  /*****
 @purpose:Click on any note which are displayed on home page open the dialog box which have editable 
 ******/
  openDialog(items: any) {
    this.dialog.open(EditNotesComponent, {
      data: {
        title: items.title,
        description: items.description,
        id: items.id,
        color: items,
        isPined: items.isPined
      }
    });
    console.log("hhh", items.title);
    // console.log("masterName",this.notesData);

  }
  /*****
 @purpose:Click on color palete it return the event i.e color from icon component and change the color of note
 ******/
  changeColor(items, $event) {
    this.setColor = $event
    console.log("get color", this.setColor);
    var data = {
      "color": this.setColor,
      "noteIdList": [items.id]
    }
    console.log("jdfdhfhd", data);

    this.noteService.postColor(data).subscribe(
      (response: any) => {
        console.log(response);
        //this.addNotes=response.data;
        console.log("data1==>", this.addNotes);
        // this.dataService.changeMessage(''); 
        this.getAllNotes();
        this.snackbar.open('note color updated Successfully..', 'End now', { duration: 1000 });

      },
      error => {
        console.log(error);
        this.snackbar.open('note color not updated', 'End now', { duration: 1000 });
      })
  }
  /*****
 @purpose:Click on archieve mat-icon-button the note become invisible from the home page 
 ******/
  archiveNote(items, $event) {

    this.archive = $event
    var data = {
      "isArchived": true,
      "noteIdList": [items.id]
    }
    console.log("archive note=-=>", data);
    this.noteService.postArchive(data).subscribe(
      (response: any) => {
        console.log(response);
        this.dataService.changeMessage('rewq');
        this.getAllNotes();
        this.snackbar.open('note archived Successful', 'End now', { duration: 1000 });

      },
      (error) => {
        console.log(error);
        this.snackbar.open('note not archived', 'End now', { duration: 1000 });

      }
    )

  }
  /*****
   @purpose:Click on reminder mat-icon-button it hit the API and set the reminder for that note
   ******/
  updateReminder(items, $event) {
    this.setReminder = $event
    console.log("get reminder", this.setReminder);
    var noteData = {
      "reminder": this.setReminder,
      "noteIdList": [items.id]
    }
    console.log("jdfdhfhd", noteData);

    this.noteService.postData(noteData).subscribe(
      (response: any) => {
        console.log(response);
        //  this.addNotes=response.data;
        this.dataService.changeMessage('rewq');
        this.getAllNotes();
        console.log("data1==>", this.addNotes);
        this.snackbar.open('note reminder added Successfully..', 'End now', { duration: 1000 });
      },
      error => {
        console.log(error);
        this.snackbar.open('reminder not set', 'End now', { duration: 1000 });
      }
    )
  }
  /*****
   @purpose:Click on delete reminder mat-icon-button it hit the API and remove the reminder 
   ******/
  removeReminder(id: any) {
    console.log("remindeer");

    this.user = this.userId
    this.noteService.deleteReminder(id).subscribe(
      (response) => {
        this.snackbar.open('sucessfully deleted reminder', "", { duration: 2000 })
      },
      (error) => {
        this.snackbar.open("reminder not deleted", "", { duration: 2000 })
      }
    )
  }
  /*****
 @purpose:Note on the home page after click on unpin it become pin and display under the pinned tag
 ******/
  pin(id: any) {
    this.Id = id;
    var data = {
      "noteIdList": [id],
      "isPined": true
    }
    console.log("pin true", data);

    this.noteService.pin(data).subscribe(
      (response: any) => {
        // this.view.getNotes();
        this.getAllNotes();
        this.snackbar.open("Note is pinned sucessfully", "", { duration: 2000 });
        this.dataService.changeMessage('');
        // this.getAllNotes();

      },
      (error) => {
        this.snackbar.open("Note is not pinned", "", { duration: 2000 });
        console.log("aaabc", error);
      }
    )
  }
  /*****
 @purpose:Note on the home page after click on pin it become unpin and display under the others tag
 ******/
  unPin(id: any) {
    this.Id = ''
    var data = {
      "noteIdList": [id],
      "isPined": false


    }
    console.log("unpin false", data);

    this.noteService.pin(data).subscribe(
      (response: any) => {
        // this.view.getNotes();
        this.getAllNotes();
        this.snackbar.open("Note is unpinned sucessfully", "", { duration: 2000 });
        this.dataService.changeMessage('');
        // this.getAllNotes();

      },
      (error) => {
        this.snackbar.open("Note is not pinned", "", { duration: 2000 });
        console.log("aaabc", error);
      }
    )
  }
}

