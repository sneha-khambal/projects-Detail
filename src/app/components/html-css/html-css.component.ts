import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular/angular.service';
import { ProjectDetails } from '../project-details/angular.model';
import { HtmlCssService } from './html-css.service';

@Component({
  selector: 'app-html-css',
  templateUrl: './html-css.component.html',
  styleUrls: ['./html-css.component.css']
})
export class HtmlCssComponent implements OnInit {
  projectDetail!:ProjectDetails[]
  constructor(private service :HtmlCssService) { }

  ngOnInit(): void {
    
  }
  getProject(){
    this.projectDetail= this.service.getDetails()
   }
}
