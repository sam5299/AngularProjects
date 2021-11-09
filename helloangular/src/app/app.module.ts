import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { TodotaskComponent } from './todotask/todotask.component';

import { FormsModule } from "@angular/forms";
// if we want to use any module we have to import modules in this file

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    TodotaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
