import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';
import { Todo } from '../../../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo:Todo;
  @Input() todoIndex;
  @Output() refreshList = new EventEmitter();
  constructor(private _todoServes: TodoServesService){}

  removeTodo(id:number){
    this._todoServes.removeTodo(id).subscribe();
    this.refreshList.emit(id);
  }
  toggleComplete(){
    this.todo.completed = !this.todo.completed;
    this._todoServes.toggleComplete(this.todo).subscribe();
  }
}
