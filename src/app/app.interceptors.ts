import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { XmlInterceptor } from './interceptors/xml.interceptor';

export const httpInterceptorsProviders: Provider[] = [
    { provide: HTTP_INTERCEPTORS, useClass: XmlInterceptor, multi: true }
];
