import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }
  userName=""
  pass=""
  readValues=()=>{
    let data={
      "userName":this.userName,
      "pass":this.pass
    }
     console.log(data)
     this.myapi.login(data).subscribe(
      (response:any)=>{
        if (response.length>0) {
          this.myrouter.navigate(["/view"])
     
         
        } else {
          alert ("invalid")
          
          
        }
      }
     )
   
  }
    ngOnInit(): void {
    }
  
  }