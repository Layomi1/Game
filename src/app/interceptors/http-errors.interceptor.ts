import { catchError } from 'rxjs/operators';
import { Observable,throwError as observableThrowError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class HttpErrorInterceptor implements HttpInterceptor{
    
    constructor(){}
    
    intercept (
        req: HttpRequest<any>,
        next: HttpHandler
    ):Observable<HttpEvent<any>>{
        return next.handle(req).pipe(
            catchError((err)=> {
                console.log (err);
                return observableThrowError(err);
            })
        );
    }
}


