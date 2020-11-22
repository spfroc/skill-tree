import { Injectable } from '@angular/core';

import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable()

export class AjaxInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const basicReq = req.clone({
            // headers: req.headers.set('Authorization', `Bearer ${this.token}`),
            url: req.url.replace(req.url, `${environment.baseUrl + req.url }`)
        });
        return next.handle(basicReq);
    }
}