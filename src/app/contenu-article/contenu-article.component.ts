import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {YoutubeApiService} from "../shared/services/youtube-api.service";
import {ListVideos} from "../../model/ListVideos";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contenu-article',
  templateUrl: './contenu-article.component.html',
  styleUrls: ['./contenu-article.component.css'],
  providers: [YoutubeApiService]
})
export class ContenuArticleComponent implements OnInit {

  listeDesVideos: ListVideos;
  isLoaded = false;

  @Input()
  sourceVideo = "https://www.youtube.com/embed/";
  videoId: string;
  urlSafe: SafeResourceUrl;

  constructor(private http: HttpClient, private youtubeApiService: YoutubeApiService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
