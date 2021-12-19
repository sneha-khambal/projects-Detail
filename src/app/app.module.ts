import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './components/angular/angular.component';
import { JsComponent } from './components/js/js.component';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImagesComponent } from './components/images/images.component';
import { NodejsComponent } from './nodejs/nodejs.component';

@NgModule({
  declarations: [	
    AppComponent,
    AngularComponent,
    JsComponent,
    HtmlCssComponent,
    NavbarComponent,
    ImagesComponent,
      NodejsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
