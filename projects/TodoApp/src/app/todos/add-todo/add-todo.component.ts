import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { TodoServesService } from "../../todo-serves.service";
import { Todo }       from '../../todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  // @Output() addTodo = new EventEmitter();

  TodoText;

  constructor(private _todoServe:TodoServesService){}

  // addTodo(TodoText){
  //   this._todoServe.addTodo(TodoText);
  // }
  addTodo(todoInput){

    const theNewTodo:Todo = new Todo();
    
    theNewTodo.title     = todoInput.value;
    theNewTodo.completed = false;

    this._todoServe.addTodo(theNewTodo).subscribe (
      resp => console.log(resp)
    );
    todoInput.value = '';
  }
}
