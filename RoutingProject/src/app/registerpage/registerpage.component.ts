import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'; //importing DataService class from newly created data.service.ts

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  //creating 4 variable for 4 input fields in .html
  uname:String ="";
  uemail:String = "";
  password:String = "";
  confirmPassword:String = "";
  constructor(private mySrv:DataService) { //creating object od Dataservice
    
  }

  ngOnInit(): void {
  }

  displayFormValues(){
    alert('Name:'+this.uname+" Email:"+this.uemail);
    console.log("Value of uname:"+this.uname);
    console.log("Value of uemail:"+this.uemail);
    console.log("Value of password:"+this.password);
    console.log("Value of confirmPassword:"+this.confirmPassword);
    console.log("Message from services:"+this.mySrv.sayHello());
  }
}
