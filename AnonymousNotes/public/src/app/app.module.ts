import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesService } from './notes.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
