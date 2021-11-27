import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponentComponent } from './table-component/table-component.component';

import {FormsModule} from '@angular/forms';
import { Newcomponent1Component } from './newcomponent1/newcomponent1.component';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ButttonClickCompoComponent } from './buttton-click-compo/buttton-click-compo.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    Newcomponent1Component,
    Newcomponent2Component,
    MyComponentComponent,
    ButttonClickCompoComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
