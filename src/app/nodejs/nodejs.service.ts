import { Injectable } from '@angular/core';
import { ProjectDetails } from '../components/project-details/angular.model';

@Injectable({
  providedIn: 'root'
})
export class NodejsService {
  projectDetail:ProjectDetails[] =[
    new ProjectDetails('Weather App',`u can check your city weather.`,'https://covid-19-tracker-32f43.firebaseapp.com/',
    'https://github.com/sneha-khambal/ng-Covid-19-Tracker.git'),
    
      ]
      
      
  getDetails(){
    return this.projectDetail.slice();
  }
}
