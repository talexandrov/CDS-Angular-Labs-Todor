import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Todo }       from './todo';


// http://my-json-server.typicode.com/talexandrov/json-fake-server/todos

// export interface TodoInterface {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

@Injectable({
  'providedIn':'root'
})
export class TodoServesService {
  constructor(private api:ApiService) {
    // this.fetchTodos();
  }

  getTodos():Observable<Todo[]>{
    return this.api.fetchTodos();
  }

  fetchTodos():Observable<Todo[]>{
    return this.api.fetchTodos();
  }
  addTodo(todoName):Observable<Todo[]>{
    return this.api.addTodo(todoName);
  }

  removeTodo(id:number):Observable<Todo[]>{
    return this.api.removeTodo(id);
  }

  toggleComplete(todo):Observable<Todo[]>{
    return this.api.updateTodo(todo);
  }
}
