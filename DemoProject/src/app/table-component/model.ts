
//this class holds task owner name and total task for him using array of object
export class TodoTask{
	userName:any;
	taskList:any;

	//create constructor
	constructor(){
		this.userName = "Abhi's";
		this.taskList = [
							new TaskList("Painting",false),
							new TaskList("Cooking",true),
							new TaskList("Cleaning",false),
							new TaskList("Take out notes",false),
						];
	}
}


//this class holds to list task list and status
export class TaskList{
	taskName;
	status;
	constructor(tname:any,tstatus:any){
		this.taskName = tname;
		this.status = tstatus;
	}
}