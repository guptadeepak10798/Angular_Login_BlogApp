import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:9090';

  constructor(private http:HttpClient) { }


  //get userlist api
  getUser(){
    return this.http.get(`${this.baseUrl}/api/users/`)
  }

  getUserDetailsById(id : number){
    return this.http.get(`${this.baseUrl}/api/users/${id}`)
  }

//register user
updateUserProfile(id:number,userData: any) {
  console.log('upadte user function called');
  return this.http.put(`${this.baseUrl}/api/users/${id}`, userData);

  // http://localhost:9090/api/v1/auth/register
}
  

}
