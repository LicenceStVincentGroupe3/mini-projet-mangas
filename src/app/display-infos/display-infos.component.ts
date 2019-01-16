import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-infos',
  templateUrl: './display-infos.component.html',
  styleUrls: ['./display-infos.component.css']
})
export class DisplayInfosComponent implements OnInit {

  @Input() user: object;
  imagesrc = 'https://www.papillesetpupilles.fr/wp-content/uploads/2016/09/Poulet-a-la-courge-butternut.jpg';
  username: string;
  playlists = ['Année 2000', 'Année 90', 'Juste pour rire', 'Top 2018'];
  todoList: object;
  isLoaded = false;

  constructor(private http: HttpClient) {
    this.username = 'Gradi';
  }

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(
        data => {
          this.todoList = data;
          this.isLoaded = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  addPlaylist(playlist: string) {
    this.playlists.push(playlist);
  }
}
