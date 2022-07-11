import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  constructor(private Http:HttpClient) {
  }

  ngOnInit(): void {
    
  }

  getData(){
    return this.Http.get("https://jsonplaceholder.typicode.com/posts")
  }
  findOneUser(id:number){
    return this.Http.get("https://jsonplaceholder.typicode.com/posts"+"/" + id)
  }
}
