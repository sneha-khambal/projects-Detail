import { Injectable } from '@angular/core';
import { ProjectDetails } from '../project-details/angular.model';

@Injectable({
  providedIn: 'root'
})
export class AngularService {
  projectDetail:ProjectDetails[] =[
    new ProjectDetails('covid-19 tracker',`In this project
     i have represent the ratio of the recovered cases, death cases, active cases,
     and confirmed cases of  covid-19  
    across the world and also datewise covid-19 cases in each country  with the help of 
    graphical representation.`,'https://covid-19-tracker-32f43.firebaseapp.com/',
    'https://github.com/sneha-khambal/ng-Covid-19-Tracker.git'),
    new ProjectDetails(' Account Form',
    `this project is a simple account creation form. you have to enter your details and submit the form. if the details are valid you will get "done" message.
    the validation of this form is done using reactive form of angular.`,
     'https://ng-reactiveform.web.app/','https://github.com/sneha-khambal/ng-reactive-form.git')
     
      ]
      
      
  getDetails(){
    return this.projectDetail.slice();
  }
}
