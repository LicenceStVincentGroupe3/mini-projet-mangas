import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-infos',
  templateUrl: './display-infos.component.html',
  styleUrls: ['./display-infos.component.css']
})
export class DisplayInfosComponent implements OnInit {

	@Input() user: object;
	username:string;
	imgsrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Srcvn8YBPQROuYpi2Nz3CI8H2LS4zuMDORp0qrcf19qeShHukQ';
	todoList: object;
	isLoaded = false;

  constructor(private http: HttpClient) { 
  	this.username='Dylan';
  }
	playlists=['Année 2000','Année 90','Juste pour rire','Top 2018'];

	addPlaylist(playlist: string) {
	this.playlists.push(playlist);
	}

  ngOnInit() {
  	this.http
  		.get('https://jsonplaceholder.typicode.com/todos/1')
  		.subscribe(data => {
    		this.todoList = data;
    		this.isLoaded = true;
        },
        error => {
        	console.log(error);
        }
      );  	
  }
}
