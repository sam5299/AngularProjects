import { Component, OnInit } from '@angular/core';
import {UserTaskList,TaskList} from "./model";
@Component({
  selector: 'app-table-componenet',
  templateUrl: './table-componenet.component.html',
  styleUrls: ['./table-componenet.component.css']
})
export class TableComponenetComponent implements OnInit {
  //empty constructor
  data:any;
  constructor() {
  }
  usertasks = new UserTaskList(); //object of class present in model.ts namely UserTaskList
  ngOnInit(): void {
  }

  //this method returns the user name present in class UserTaskList
  getUserName(){
    return this.usertasks.username; 
  }

  //this method return the tasklist(variable in UserTaskList present in model.ts)
  getUsersTaskList(){
    // return this.usertasks.tasklist; //return all the task

    return this.usertasks.tasklist.filter((item:{taskstatus:any;})=>!item.taskstatus);
  }

  //method to add new task in users to do list
  addNewTask(taskname:any){
    this.data = new TaskList(taskname,false);
    this.usertasks.tasklist.push(this.data);
  }
}
