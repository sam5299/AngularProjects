import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import {ServicesComponent} from './services/services.component';
import {HomeComponent} from './home/home.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {RegisterpageComponent} from './registerpage/registerpage.component';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'services', component:ServicesComponent},
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login',component:LoginpageComponent},
  {path:'register',component:RegisterpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
