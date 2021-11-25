import { Component, OnInit } from '@angular/core';
import {TodoTask,TaskList} from './model';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  task = new TodoTask();
  newtask:any;
  constructor() { }

  ngOnInit(): void {
  }

  getUserName(){
    return this.task.userName;
  }

  getTask(){
    //return this.task.taskList;

    return this.task.taskList.filter((item:{status:any})=>!item.status);
  }

  addTask(taskname:any){
    this.newtask = new TaskList(taskname,false);
    this.task.taskList.push(this.newtask);
  }

}
