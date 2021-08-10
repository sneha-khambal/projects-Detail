import { Injectable } from '@angular/core';
import { ProjectDetails } from '../project-details/angular.model';

@Injectable({
  providedIn: 'root'
})
export class HtmlCssService {

  projectDetail:ProjectDetails[] =[
    
    new ProjectDetails(
      'interactive-pricing-component',
    'Interactive-pricing-component project build with html5,css3 and javascript.It is a desktop Application.',
    'https://interactive-pricing-comp-946fd.web.app/',
    'https://github.com/sneha-khambal/interactive-pricing-component-main.git'),

    new ProjectDetails(
      'Simple Html Page',
    ' It is a simple e-learning frontend web design made  with the help of html5 and CSS3 .',
    'https://simple-html-page-9b101.web.app/',
    'https://github.com/sneha-khambal/simple-HTML.git'),

    new ProjectDetails(
      'tourism website',
    ' this project is a frontend design of tourism website created with simple html5 and CSS3.',
    'https://frontendwebsite-36daf.firebaseapp.com/',
    'https://github.com/sneha-khambal/frontendWebsite.git'),
    
    new ProjectDetails(
      ' Static Web Design',
    'This application is a static frontend web design.',
    'https://static-web-design-67050.web.app/',
    'https://github.com/sneha-khambal/static-web-design.git'),

      ]

      getDetails(){
        return this.projectDetail.slice();
      }
   
}
