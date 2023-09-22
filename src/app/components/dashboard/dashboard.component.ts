import { Component, OnInit } from '@angular/core';
import { error, log } from 'console';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  firstData: any;
  listOfUsers: any[] = [];
  role : string | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.role=localStorage.getItem("role");
  }

  getUser() {
    return this.userService.getUser().subscribe((user: any) => {
      this.listOfUsers = user;

      console.log(this.listOfUsers);

      console.log('user----', this.listOfUsers[0].email);
    });
    //   user=>{
    //     console.log(user);
    //     // console.log(user[0].name);
    //     console.log(Object.values(user)[0].name);

    //     // const jsonData = user;
    //     // const name = user;
    //     // console.log(jsonData.constructor);
    //   },
    //   error=>{
    //     console.log(error);
    //   },
    //   () => {
    //     // Handle the completion
    //     console.log('Request completed.');
    //   }
    // )
  }

 
}
