import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from './dog.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogEditorComponent } from './dog-editor/dog-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
