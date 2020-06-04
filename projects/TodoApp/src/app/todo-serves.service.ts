import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// http://my-json-server.typicode.com/talexandrov/json-fake-server/todos

export interface TodoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  'providedIn':'root'
})
export class TodoServesService {
  constructor(private http:HttpClient) {
    this.fetchTodos();
  }

  todos: TodoInterface[] = [];
  todosURL = "http://my-json-server.typicode.com/talexandrov/json-fake-server/todos";

  fetchTodos(){
    this.http.get<TodoInterface[]>(this.todosURL).subscribe(
      data => {data.forEach(element => this.todos.push(element))
      });
  }

  initTodos(todoList: TodoInterface[]) {
    this.todos = todoList;
  }

  getTodos(){
    return this.todos;
  }

  removeTodo(index){
    this.todos.splice(index,1);
  }

  addTodo(todoTitle: string){
    let lastID = this.todos.length;

    this.todos.push({
      'userId': 1,
      'id': lastID+1,
      'title': todoTitle,
      'completed': false
    });
  }
  
  toggleComplete(index){
    this.todos[index].completed = !this.todos[index].completed;
  }
}
