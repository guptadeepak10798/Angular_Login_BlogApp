import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public loggedIn = false;
   username: string | null ;

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    this.username = localStorage.getItem('loginUser');
    // this.username= user;
    // console.log("============================>>>",typeof(user));
  }

  logoutUser(){
    this.loginService.logout();
    location.reload()
  }
}
