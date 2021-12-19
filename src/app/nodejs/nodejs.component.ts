import { Component, OnInit } from '@angular/core';
import { HtmlCssService } from '../components/html-css/html-css.service';
import { ProjectDetails } from '../components/project-details/angular.model';
import { NodejsService } from './nodejs.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {
projectDetail!:ProjectDetails[]
  constructor(private service :NodejsService) { }

  ngOnInit(): void {
    
  }
  getProject(){
    this.projectDetail= this.service.getDetails()
   }
}
