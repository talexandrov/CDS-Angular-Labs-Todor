import { Component } from '@angular/core';
import { TodoServesService } from "../todo-serves.service";


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent {
  constructor(private _todoServesService:TodoServesService){

  }

  // (keyup)="addTodo($event)"
  // (click)="addTodo(newTodo.value)"
  addTodo(param){
    console.log(typeof(param))

    // // if event is keyup:
    // if(typeof(param) === 'string'){
    //   this._todoServesService.addTodo(param);
    // } else if(param.keyCode === 13){
    //   this._todoServesService.addTodo(param.target.value)
    // }

    this._todoServesService.addTodo(param);
  }
}
