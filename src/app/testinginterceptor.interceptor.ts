import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestinginterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //const AUTHKEY = new HttpHeaders("key","Value")
    const AuthKey="123-789-pqu"
    return next.handle(request.clone({setHeaders:{AuthKey}}));
  }
}
