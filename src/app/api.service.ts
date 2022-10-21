import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hpp:HttpClient) { }
  viewuser=()=>{
    return this.hpp.get("http://localhost:8080/viewUser")
  }
  addUser=(data:any)=>{
    return this.hpp.post("http://localhost:8080/addUser",data)
  }
}
