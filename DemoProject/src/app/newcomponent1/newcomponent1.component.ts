import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-newcomponent1',
  templateUrl: './newcomponent1.component.html',
  styleUrls: ['./newcomponent1.component.css']
})
export class Newcomponent1Component implements OnInit {

   @Input() msg:string="abc";
  constructor() { }

  ngOnInit(): void {
  }

}
