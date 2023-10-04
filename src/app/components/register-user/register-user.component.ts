import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { log } from 'console';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent {
  // name:String="Hello from child,(Registeruser component )!";

  // @Input () fromParentComponent:String;
  // registerForm : any;
  constructor(private loginService: LoginService) {}
  // readonly myBool: boolean = false;
  // myNum: number = 1207;
  // mine: [number, string] = [121, 'bacon'];
  
  registeration: String = 'User Registeration Portal';

  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    about: new FormControl(''),
  });

  // currentDate:Date = new Date();

  registerUser(): void {
    console.warn(this.registerForm.value);
  }

  onSubmit() {
    alert('Btn clicked');
    console.log(this.registerForm.value);
    this.loginService.registerUser(this.registerForm.value).subscribe((res) => {
      console.log('res----', res);
    });
  }

  onKeyUp(name:string){
    console.log(name);
  }
}
