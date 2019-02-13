import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TodoList} from '../model/TodoList';

@Injectable({
  providedIn: 'root'
})
export class TodoListApiService {

  constructor(private httpClient: HttpClient) { }

  retrieve(id: number): Observable<TodoList> {
    return this.httpClient
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(map((todoList: TodoList) => {
        return todoList;
      }));
  }
}
