import { Component, Input, ViewChild } from '@angular/core';
import { RegisterUserComponent } from './components/register-user/register-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginapp';
  forParent:String = '';

//  parentMesaage:String="Parent to child data commumnication";


  @ViewChild(RegisterUserComponent) registerUser : any;
  ButtonClick(){
    this.forParent = this.registerUser.name;
  }

}
