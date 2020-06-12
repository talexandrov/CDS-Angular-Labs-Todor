import { Component, OnInit } from '@angular/core';
import {TodoServesService} from '../todo-serves.service';
import {Todo} from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];

  constructor(private _todoServesService:TodoServesService) { }

  ngOnInit(): void {
  }

  addTodo(todo:Todo){
    this.todos = [...this.todos, todo];
  }

  refreshList(todosList) {
    this.todos = todosList;
  }
}
