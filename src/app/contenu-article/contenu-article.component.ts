import {Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {YoutubeApiService} from '../youtube-api.service';
import {ListVideos} from '../../model/ListVideos';
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

  // Récupération d'une donnée venant du composent parent
  private _article;

  @Input()
  sourceVideo = 'https://www.youtube.com/embed/';
  videoId: string

  // urlSafe: SafeResourceUrl;

  // Récupération d'une donnée venant du composent parent
  // -----------------
  @Input()
  set article(article: any) {
    this._article = article;
    console.log(this._article);
  }

  get article() {
    return this._article;
    console.log(this._article);
  }
  // -----------------

  constructor(private http: HttpClient, private youtubeApiService: YoutubeApiService, public sanitizer: DomSanitizer) {}

  ngOnInit() {
    const response = this.youtubeApiService.retrieve('snippet', 1, 'Trailer The Promised Neverland');
    response.subscribe(
      (data: ListVideos) => {
        this.listeDesVideos = data;
        this.isLoaded = true;

        /*for (let key in this.listeDesVideos.items) {
          this.videoId = this.listeDesVideos.items[key].id.videoId;
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceVideo+this.videoId);
        }*/

        // this.videoId = this.listeDesVideos.items[0].id.videoId;
        // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceVideo + this.videoId);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('on complete');
      }
    );
  }
  public sanitizeSafeVideoId(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
  }

}
