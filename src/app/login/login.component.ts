import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myrouter:Router) { }
  username=""
  password=""
  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
  
    }
    if(this.username=="admin" && this.password=="admin"){
      this.myrouter.navigate(["/view"])
    }
    else{
      alert("in valid")
    }
    console.log(data)
    alert("Sucess")
  }
    ngOnInit(): void {
    }
  
  }