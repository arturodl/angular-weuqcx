import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { XmlService } from './services/xml.service';

import { XmlResponse } from './models/xml-response.interface';
import { XmlExample } from './models/xml-example.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  xmlContent: Observable<XmlResponse<XmlExample>>;

  name = 'Angular';

  constructor(private xmlService: XmlService) {}

  ngOnInit() {
    this.xmlContent = this.xmlService.getXml();
  }
}
