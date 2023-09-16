import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarDismiss, MatSnackBarModule } from '@angular/material/snack-bar';

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
  progress = 100;
  constructor(
    private loginService: LoginService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.credentials.username != '' &&
      this.credentials.password != '' &&
      this.credentials.username != null &&
      this.credentials.password != null
    ) {
      console.log('We have to submit the form on server! ');
      // token generate here using http://localhost:9090/api/v1/auth/login
      this.loginService.generateToken(this.credentials).subscribe(
        //jab sab kuch sahi sahi chalega
        (response: any) => {
          //success
          console.log(response.token);
          this.loginService.loginUser(response.token);

              this._snackBar.open('Login success !', 'Dismiss', {
                duration: 2000,
                horizontalPosition: 'right', // Position on the screen
                verticalPosition: 'top',
                panelClass: ['success-snackbar'],
              });

          window.location.href = '/dashboard';
          // this.showSuccess();
        },
        //jab error aayegi tab error chalega
        (error) => {
          //Error
          console.log('bad credentials ==> ', error);
          console.log('error.message');
          console.log(error.error.message);

              this._snackBar.open(error.error.message, 'Dismiss', {
                duration: 2000,
                horizontalPosition: 'right', // Position on the screen
                verticalPosition: 'top',
                panelClass: ['failure-snackbar'],
              });
        }

      );
    } else {
      console.log('Fields are empty !! ');
    }
  }

 
  // showSuccess() {
  //   this.toastr.success('This is a success message', 'Login Success');
  // }
}
