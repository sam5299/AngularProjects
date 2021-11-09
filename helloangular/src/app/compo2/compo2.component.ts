import { Component, OnInit } from '@angular/core';
import { TodoTask,TaskList } from "./model";
 
@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {

  dyamicTask = new TodoTask();
  item:any;

  constructor() { }

  ngOnInit(): void {
  }

  //method to get task owner name
  getTaskOwnerName(){
    return this.dyamicTask.userName;
  }

  //method to get task list
  getTaskList(){
    //this will return all the task
    //return this.dyamicTask.taskList;  
   
   //this will return only task which are not completed
    return this.dyamicTask.taskList.filter((item:{status:any;}) => !item.status);
  }

  //method to add new task 
  addNewTask(taskName:any){
    //alert('in this method and value is:'+taskName);
    var task = new TaskList(taskName,false);
    // push method is used to add new item in array
    this.dyamicTask.taskList.push(task);
  }
}
