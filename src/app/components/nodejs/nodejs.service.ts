import { Injectable } from '@angular/core';
import { ProjectDetails } from '../project-details/angular.model';

@Injectable({
  providedIn: 'root'
})
export class NodejsService {
  projectDetail:ProjectDetails[] =[
    new ProjectDetails('Fancy Website',`e-commerce website 
     build using nodeJs with express and MongoDB to store user data.  `,
    'https://nj-application.herokuapp.com/',
    'https://github.com/sneha-khambal/fancyWebsite.git'),
    
    new ProjectDetails('Weather App',`with this weather application you can check your city weather.It is nodeJs Application build using express and for weather data i used openWeatherMap Api.`,
    'https://weather-of-city.herokuapp.com/',
    'https://github.com/sneha-khambal/weatherApp.git'),
    
      ]
      
      
  getDetails(){
    return this.projectDetail.slice();
  }
}
