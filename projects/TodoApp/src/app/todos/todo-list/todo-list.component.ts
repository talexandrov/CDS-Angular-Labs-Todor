import { Component, OnInit} from '@angular/core';
import {TodoServesService} from '../../todo-serves.service'
import {TodoInterface} from '../../todo-serves.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: TodoInterface[] = [];

  constructor(private _todoServesService:TodoServesService){
    this._todoServesService.initTodos(this.todos);
  }

  // toggleComplete(id){
  //   console.log('>>> toggleComplete is active <<<');
  //   this.todos[id-1].complete = !this.todos[id-1].complete;
  // }

  // keyUpHandler(newTodoTitle){
  //   this.addNewTodo(newTodoTitle)
  // }
}