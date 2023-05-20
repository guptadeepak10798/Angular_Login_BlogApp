import { Component, OnInit } from '@angular/core';
import { error, log } from 'console';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: '',
  };

  constructor(private loginService : LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    
    if((this.credentials.username !='' && this.credentials.password !='') 
    && (this.credentials.username !=null && this.credentials.password !=null) ){
      console.log('We have to submit the form on server! ');
      // token generate here using http://localhost:9090/api/v1/auth/login
      this.loginService.generateToken(this.credentials).subscribe(
        //jab sab kuch sahi sahi chalega
        (response:any)=>{
          //success
          console.log(response.token);
          this.loginService.loginUser(response.token);
          window.location.href='/dashboard'
        },
        //jab error aayegi tab error chalega
        error=>{
          //Error
          console.log(error);
        }
      )
    }else{
      console.log('Fields are empty !! ');
      
    }

  }
}
