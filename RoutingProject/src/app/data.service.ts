import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

//this sayHello will be available to every component in this project can be call using object of DataService class
  sayHello():String{
    return "Hello Sameer";
  }
}
