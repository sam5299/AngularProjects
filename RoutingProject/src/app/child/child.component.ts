import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() variable=new EventEmitter();
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeVarible(){
    this.count = this.count+1;
    this.variable.emit(this.count);
    console.log("value of count is:"+this.count);
  }

}
