import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { XmlService } from './services/xml.service';

import { httpInterceptorsProviders } from './app.interceptors';

@NgModule({
    imports: [BrowserModule, CommonModule, HttpClientModule],
    declarations: [AppComponent, HelloComponent],
    providers: [
        XmlService,
        httpInterceptorsProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
