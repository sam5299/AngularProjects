export class UserTaskList{
	username:any;
	tasklist:any;
	constructor(){
		this.username = "Sameer";
		this.tasklist = [
				new TaskList("Complete Angular Project",false),
				new TaskList("Practice Previous Concept",false),
				new TaskList("Have breakfast",true),
				new TaskList("Have lunch",false),
				new TaskList("Sleep for 2 hr",false)
		];
	}
}

export class TaskList{
	taskname:any;
	taskstatus:any;
	constructor(taskname:any,taskstatus:any){
		this.taskname = taskname,
		this.taskstatus = taskstatus
	}
}