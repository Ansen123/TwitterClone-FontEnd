import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }
name=""
lName=""
mobile=""
userName=""
pass=""
email=""
address=""

readvalues(){
  let data={
    "name":this.name,
    "lName":this.lName,
    "mobile":this.mobile,
    "userName":this.userName,
    "pass":this.pass,
    "email":this.email,
    "address":this.address,
    
  
  }
  console.log(data)
  this.myapi.addUser(data).subscribe(
    (response)=>{
      alert("Data Added")
    }
  )
}
ngOnInit(): void {
}

}
