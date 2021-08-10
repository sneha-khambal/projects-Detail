import { Component, OnInit } from '@angular/core';
import { ProjectDetails } from '../project-details/angular.model';
import { JsService } from './js.service';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {
  projectDetail!:ProjectDetails[]
  constructor(private service :JsService) { }

  ngOnInit(): void {
  }
  getProject(){
    this.projectDetail= this.service.getDetails()
   }
}
