import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponentComponent } from './table-component/table-component.component';

import {FormsModule} from '@angular/forms';
import { Newcomponent1Component } from './newcomponent1/newcomponent1.component';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    Newcomponent1Component,
    Newcomponent2Component,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
