import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  listOfUsers: any;

  constructor(private userService : UserService ) { }

  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList(){
    this.userService.getUser().subscribe((user: any) => {
      this.listOfUsers = user;
      console.log("Load user list ==> ",this.listOfUsers);
    });
  }

}
