import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttton-click-compo',
  templateUrl: './buttton-click-compo.component.html',
  styleUrls: ['./buttton-click-compo.component.css']
})
export class ButttonClickCompoComponent implements OnInit {

  constructor() { }
  buttonvalue:any;
  ngOnInit(): void {
  }

  buttonClickEvent(name:any){
    this.buttonvalue = name;
  }

  getButtonEvent(){
    return "You pressed "+(this.buttonvalue.id);
  }

}
