import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {TodoList} from "../model/TodoList";

@Injectable()
export class TodolistApiService {

  constructor(private httpClient: HttpClient) { }

  retrieve(parametre: number): Observable<TodoList> {
    return this.httpClient
      .get(`https://jsonplaceholder.typicode.com/todos/${parametre}`)
      .pipe(map((todoList: TodoList) => {
        return todoList;
      }));
  }
}
