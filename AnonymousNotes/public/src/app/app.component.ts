import { Component, OnInit } from '@angular/core';
import { Note } from "./note";
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = new Note()
  notes

  constructor(private _noteService:NotesService){}

  submitNote(){
    this._noteService.addNote(this.note).then(response => console.log(response)).catch(err => console.log(err));
    this.getNotes()
    console.log(this.note)
    this.note = new Note()
  }

  ngOnInit(){
    this.getNotes()
  }

  getNotes(){
    this._noteService.getAllNotes().then( notes => this.notes = notes).catch(err => console.log(err))
  }
}
