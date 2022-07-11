import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private us:UsersService, private activatedRoute:ActivatedRoute) { }
  id:any;
  user:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data)
      this.id = +data['id'];
    })
    this.us.findOneUser(this.id).subscribe((user)=>{
      console.log(user)
      this.user = user; 
    })
  }
  
}
