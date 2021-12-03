import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  c=0;

  constructor() { }

  ngOnInit(): void {
  }

  changeCount(count:any){
      this.c = count;
  }

}
