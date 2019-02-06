import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TodolistApiService} from "../todolist-api.service";
import {TodoList} from "../../model/TodoList";

@Component({
  selector: 'app-display-infos',
  templateUrl: './display-infos.component.html',
  styleUrls: ['./display-infos.component.css'],
  providers: [TodolistApiService]
})
export class DisplayInfosComponent implements OnInit {

  todoList: TodoList;
  isLoaded = false;


  // Récupération d'une donnée venant du composent parent
  private uti;

  // Envoi d'une donnée au composant parent
  @Output() deconnecté = new EventEmitter<boolean>();

  imagesrc = 'https://www.papillesetpupilles.fr/wp-content/uploads/2016/09/Poulet-a-la-courge-butternut.jpg';
  username: string;
  playlists = ['Année 2000', 'Année 90', 'Juste pour rire', 'Top 2018'];

  constructor(private http: HttpClient, private todoListApiService: TodolistApiService) {
    this.username = 'Gradi';
  }

  // Récupération d'une donnée venant du composent parent
  // -----------------
  @Input()
  set utilisateur(utilisateur:object){
    this.uti = utilisateur;
  }

  get utilisateur(){
    return this.uti;
  }
  // -----------------



  // Envoi d'une donnée au composant parent
  // -----------------
  deconnexion(){
    this.deconnecté.emit(true);
    console.log("toto");
  }
  // -----------------

  ngOnInit() {
    const response = this.todoListApiService.retrieve(1);
    response.subscribe(
      (data: TodoList) => {
        alert('Hello');
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
