import { Component, OnInit } from '@angular/core';

import { ProjectDetails } from '../project-details/angular.model';
import { AngularService } from './angular.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  projectDetail!: ProjectDetails[];




  constructor(private service: AngularService) { }

  ngOnInit(): void {

  }
  getProject() {
    this.projectDetail = this.service.getDetails()

  }


}
