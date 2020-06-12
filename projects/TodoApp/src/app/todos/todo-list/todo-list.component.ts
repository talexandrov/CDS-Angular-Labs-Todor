import { Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoServesService} from '../../todo-serves.service';
import {Todo} from '../../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {

  @Input("todosData") todos;
  @Output() listRefresh = new EventEmitter();

  constructor(private _todoServesService:TodoServesService){
    
  }

  addTodo (todoTitle){

  }

  refreshList (id:number){
    var index =  this.todos.findIndex(x => x.id===id);
    console.log(index);
    
    this.todos.splice (index,1);
    this.listRefresh.emit(this.todos);
  }

  ngOnInit(){
    this._todoServesService.fetchTodos().subscribe ({
      next: data => this.todos = data,
      error: msg => console.log(msg)
    });
  }
  // toggleComplete(id){
  //   console.log('>>> toggleComplete is active <<<');
  //   this.todos[id-1].complete = !this.todos[id-1].complete;
  // }

  // keyUpHandler(newTodoTitle){
  //   this.addNewTodo(newTodoTitle)
  // }
}