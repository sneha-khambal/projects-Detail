import { Component } from '@angular/core';
import { ProjectDetails } from '../project-details/angular.model';
import { NodejsService } from './nodejs.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent  {
projectDetail!:ProjectDetails[]
  constructor(private service :NodejsService) { }

  getProject(){
    this.projectDetail= this.service.getDetails()
   }
}
