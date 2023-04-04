import { catchError } from 'rxjs/operators';
import { Observable,throwError as observableThrowError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor{
    obervableThrowError: any;
    constructor(){}
    
    intercept (
        req: HttpRequest<any>,
        next: HttpHandler
    ):Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                "x-rapidapi-key":"557eae9e13mshdaa9a6a1c54fc83p1c4894jsn65996410b73d",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
            },
            setParams: {
                key: 'ce14b90ed0d24fff82fd8e0429f2f78d'
            }
        });
        return next.handle(req);
    }
}

