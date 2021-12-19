import { Injectable } from '@angular/core';
import { ProjectDetails } from '../project-details/angular.model';

@Injectable({
  providedIn: 'root'
})
export class JsService {
  
  projectDetail:ProjectDetails[] =[
    
    new ProjectDetails('notes app',`it is a notes application where you can write ,edit or
     delete note as per your need.  this application is build with javascript, htm5, css3 `,
    'https://notes-app-4b1e8.firebaseapp.com/',
    'https://github.com/sneha-khambal/notesApp.git'),

    new ProjectDetails('To Do List ',`it is a to-do-list application where you can add your daily tasks and  modify it 
    (add ,delete, edit) whenever you want. this application is build with javascript, htm5, css3  `,
    'https://to-do-list-768f0.web.app/',
    'https://github.com/sneha-khambal/toDoList.git')
      ]
   

  getDetails(){
    return this.projectDetail.slice();
  }
}
