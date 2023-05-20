import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService : LoginService){}

intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    
    let newReq = req;
    let token = this.loginService.getToken();

    console.log("INTERCEPTOR TOKEN-> ", token);
    
    if(token !=null){

        newReq = newReq.clone({setHeaders:{Authorization:`Bearer ${token}` }})
    }
// For example, you can add headers or authentication tokens


    console.log("INTERCEPTOR newReq TOKEN-> ", newReq);
    return next.handle(newReq);
   
    
}

}