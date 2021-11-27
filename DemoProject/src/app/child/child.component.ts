import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  valueChanged(){
    this.count = this.count+1;
    this.valueChange.emit(this.count);
  }


}
