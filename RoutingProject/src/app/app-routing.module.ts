import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import {ServicesComponent} from './services/services.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'services', component:ServicesComponent},
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
