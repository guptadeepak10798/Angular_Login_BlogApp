import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9090"

  constructor(private http:HttpClient) { }
//Calling server to generate token
generateToken(credentials:any){
  //token generate
  return this.http.post(`${this.url}/api/v1/auth/login`,credentials);
}


//for login user
  loginUser(token: string)
  {
    localStorage.setItem("token",token);
    return true;
  }

  //To check that user is logged in or not 
  isLoggedIn()
  {
    let token = localStorage.getItem("token");

    if(token==undefined || token=='' || token== null ){
      return false;
    }else{
      return true;
    }
  }
//for logout  user
  logout(){
    localStorage.removeItem('token');
    return true;
  }

  //For getting token
  getToken(){
    return localStorage.getItem('token')
  }
  
}
