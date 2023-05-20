import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  getUser(){
    return this.userService.getUser().subscribe(
      user=>{
        console.log(user);
      },
      error=>{
        console.log(error);
      }
    
    )
  }
}
