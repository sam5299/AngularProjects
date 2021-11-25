import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponenetComponent } from './table-componenet/table-componenet.component';

// to use ngModel import FormModule from @angular/core
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TableComponenetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
