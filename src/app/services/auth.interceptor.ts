import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newReq = req;
    let token = this.loginService.getToken();
    // let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWVwYWtfZ3VwdGFAbnVjc29mdC5pbiIsImV4cCI6MTY4Nzk3MzgxOCwiaWF0IjoxNjg3OTU1ODE4fQ.NSC_yjHibLvOgOWnHJEkR7fryQ_WgQOyIYFCTRp94uTCxzk3a3jPyn1z024jyUkw--IKcYiPiL6VD1e5_77GhA';
    console.log('INTERCEPTOR TOKEN-> ', newReq);
    console.log('INTERCEPTOR TOKEN-> ', next);
    console.log('INTERCEPTOR TOKEN-> ', token);

debugger 

    if (token != null) {
      newReq = newReq.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      console.log('inside token generation ', newReq);
    }
    // For example, you can add headers or authentication tokens

    console.log('INTERCEPTOR newReq TOKEN-> ', newReq);
    return next.handle(newReq);
  }
}
