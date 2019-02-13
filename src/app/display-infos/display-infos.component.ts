import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TodoListApiService} from '../todo-list-api.service';
import {TodoList} from '../../model/TodoList';

@Component({
  selector: 'app-display-infos',
  templateUrl: './display-infos.component.html',
  styleUrls: ['./display-infos.component.css'],
  providers: [TodoListApiService]
})
export class DisplayInfosComponent implements OnInit {

  private _user;

  @Output() disconnected = new EventEmitter<boolean>();

  imagesrc = 'https://www.papillesetpupilles.fr/wp-content/uploads/2016/09/Poulet-a-la-courge-butternut.jpg';
  username: string;
  playlists = ['Année 2000', 'Année 90', 'Juste pour rire', 'Top 2018'];
  todoList: TodoList;
  isLoaded = false;

  disconnect() {
    this.disconnected.emit(true);
    console.log('toto');
  }

  @Input()
  set user(user: object) {
  this._user = user;
  }

  get user() {
    return this._user;
  }

  constructor(private todoListApiService: TodoListApiService) {
  }

  ngOnInit() {
    const response = this.todoListApiService.retrieve(1);
    response.subscribe(
      (data: TodoList) => {
        this.todoList = data;
        this.isLoaded = true;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('on complete');
      }
    );
  }

  addPlaylist(playlist: string) {
    this.playlists.push(playlist);
  }
}
