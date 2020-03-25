import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable()
export class XmlInterceptor implements HttpInterceptor {


  constructor(private ngxXml2jsonService: NgxXml2jsonService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(this.isMimeTypeXml(req.headers.get('Accept')) ?
        req.clone({ responseType: 'text' }) : req)
      .pipe(
        tap(event => console.log(event)),
        map(event => (event instanceof HttpResponse &&
        this.isMimeTypeXml((event as HttpResponse<any>).headers.get('Content-Type'))
          ? event.clone({ body: this.transformXml2Json(event.body) }) : event)));
  }

  transformXml2Json(text: string): any {
    return this.ngxXml2jsonService.xmlToJson(new DOMParser().parseFromString(text, 'text/xml'));
  }

  isMimeTypeXml(mimeType: string): boolean {
    return mimeType === 'application/xml';
  }
}
