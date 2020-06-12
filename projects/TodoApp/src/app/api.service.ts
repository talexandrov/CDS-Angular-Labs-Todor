import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Todo }       from './todo';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  //todosURL = "http://my-json-server.typicode.com/talexandrov/json-fake-server/todos";
  todosURL = "http://localhost:4300/todos";

  handleError (error):Observable<any>{
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log(`errorMessage: ${errorMessage}`);
  
    alert(errorMessage);
    return throwError(errorMessage);
  }

  fetchTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosURL)
    .pipe(catchError (this.handleError)
    )
  }

  addTodo(todo:Todo):Observable<Todo[]>{

    return this.http.post<Todo[]>(this.todosURL,todo).pipe(
      catchError (err=>this.handleError(err))
      );
  }

  updateTodo(todo:Todo):Observable<Todo[]>{
    return this.http.put<Todo[]>(`${this.todosURL}/${todo.id}`, todo).pipe(
      catchError(err=>this.handleError(err))
    );
  }

  removeTodo(id:number):Observable<Todo[]>{
    return this.http.delete<Todo[]>(`${this.todosURL}/${id}`).pipe(
      catchError(err=>this.handleError(err))
    );
  }

}
