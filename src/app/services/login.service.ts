import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:9090';

  constructor(private http: HttpClient) {}
  //Calling server to generate token
  generateToken(credentials: any)  {
    //token generate
    return this.http.post(`${this.url}/api/v1/auth/login`, credentials);
  }

  //for login user
  loginUser(token: string,role:string,loginUser:string,userId:string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('loginUser', loginUser);
    localStorage.setItem('userId', userId);
    return true;
  }

  
  //To check that user is logged in or not
  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true;
    }
  }
  //for logout  user
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('loginUser');
    localStorage.removeItem('userId');
    return true;
  }

  //For getting token
  getToken() {
    return localStorage.getItem('token');
  }

  //register user
  registerUser(userData: any) {
    console.log('register user function called');
    return this.http.post(`${this.url}/api/v1/auth/register`, userData);

    // http://localhost:9090/api/v1/auth/register
  }

  getLoggedInUsername(token: string) {
    // const token = 'YOUR_JWT_TOKEN_HERE'; // Replace with your JWT token
    const parts = token.split('.');
    const decodedPayload = atob(parts[1]);
    const payload = JSON.parse(decodedPayload);

    const sub = payload.sub;

    console.log(sub); // This will log the value of the "sub" claim
  }
}
