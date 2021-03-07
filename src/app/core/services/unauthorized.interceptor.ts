import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotifierService } from './notifier.service';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(public router: Router, private notifier:NotifierService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
              console.error("Error Event");
          } else {
              console.log(`error status : ${error.status} ${error.statusText}`);
              switch (error.status) {
                  case 401:      //login
                      this.notifier.error('global.flash.error.unauthorized');
                      this.router.navigateByUrl("/login");
                      break;
                  case 403:     //forbidden
                      this.notifier.error('global.flash.error.forbidden');
                      this.router.navigateByUrl("/unauthorized");
                      break;
                  case 500:     //internal_server_error
                      this.notifier.error('global.flash.error.internal_server_error');
                      break;
              }
          } 
      }
        return throwError(error.message);
      })
    )
    
  }

}
