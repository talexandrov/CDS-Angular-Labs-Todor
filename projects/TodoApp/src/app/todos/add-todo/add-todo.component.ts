import { Component } from '@angular/core';
import { TodoServesService } from "../../todo-serves.service";


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  // @Output() addTodo = new EventEmitter();

  TodoText;

  constructor(private _todoServe:TodoServesService){}

  addTodo(TodoText){
    this._todoServe.addTodo(TodoText);
  }

}
