import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private us:UsersService) { }
  users:any=[]
  ngOnInit(): void {
    this.us.getData().subscribe((data)=>{
      this.users = data;
    })
  }

}
