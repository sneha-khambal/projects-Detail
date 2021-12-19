import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularComponent } from './components/angular/angular.component';
import { HtmlCssComponent } from './components/html-css/html-css.component';
import { ImagesComponent } from './components/images/images.component';
import { JsComponent } from './components/js/js.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NodejsComponent } from './nodejs/nodejs.component';

const routes: Routes = [
  { path: "", redirectTo: "img", pathMatch: "full" },
  { path: "img", component: ImagesComponent },
  { path: "navbar", component: NavbarComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'html-css', component: HtmlCssComponent },
  { path: 'js', component: JsComponent },
  { path: 'nodejs', component: NodejsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
