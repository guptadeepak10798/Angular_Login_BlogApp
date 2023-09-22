import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  listOfUsers: any[] = [];
  userId : any = localStorage.getItem("userId");
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetailsById(this.userId).subscribe((user: any) => {
      debugger
      // this.listOfUsers = user;
      console.log(user.name);
      // console.log(this.listOfUsers[1]);
      // console.log('user----', this.listOfUsers[0].email);
    });
  }

}
