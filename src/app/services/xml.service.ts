import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { XmlResponse } from '../models/xml-response.interface';
import { XmlExample } from '../models/xml-example.interface';
import { Observable } from 'rxjs';

@Injectable()
export class XmlService {

  constructor(private httpClient: HttpClient) {
  }

  getXml(): Observable<XmlResponse<XmlExample>> {
    return this.httpClient.get<XmlResponse<XmlExample>>('https://xml-test.free.beeceptor.com/xml',
      {
        headers: new HttpHeaders({ 'Accept': 'application/xml' })
      })
      .pipe(
        tap(text => console.log(text)));
  }
}
