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
}
