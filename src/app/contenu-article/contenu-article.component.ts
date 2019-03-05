import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
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
export class ContenuArticleComponent implements OnInit, AfterViewInit {

  listeDesVideos: ListVideos;
  isLoaded = false;
  // private testVideoParentVersEnfant;

  // Récupération d'une donnée venant du composent parent
  private _article;
  message2 = 'Hello';
  message3: string;

  @Input()
  sourceVideo = 'https://www.youtube.com/embed/';
  videoId: string;

  @Input() message: string;
  @Input() test: string;

  // urlSafe: SafeResourceUrl;

  // Récupération d'une donnée venant du composent parent
  // -----------------
  /*@Input()
  set article(article: any) {
    this.testVideoParentVersEnfant = article;
    console.log(this.testVideoParentVersEnfant);
  }

  get article() {
    return this.testVideoParentVersEnfant;
  }*/
  // -----------------

  constructor(private http: HttpClient, private youtubeApiService: YoutubeApiService, public sanitizer: DomSanitizer) {}

  ngOnInit() {
    /*const response = this.youtubeApiService.retrieve('snippet', 10, `Résumé Foireux de : NARUTO SHIPPUDEN`);
    response.subscribe(
      (data: ListVideos) => {
        this.listeDesVideos = data;
        console.log(this.listeDesVideos);
        this.isLoaded = true;

        /*for (let key in this.listeDesVideos.items) {
          this.videoId = this.listeDesVideos.items[key].id.videoId;
          this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceVideo+this.videoId);
        }

        // this.videoId = this.listeDesVideos.items[0].id.videoId;
        // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.sourceVideo + this.videoId);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('on complete');
      }
    );*/
    this.message3 = this.message2;
    console.log(this.test);

        const response = this.youtubeApiService.retrieve('snippet', 2, `naruto`);
        response.subscribe(
          (data: ListVideos) => {
            this.listeDesVideos = data;
            console.log(this.listeDesVideos);
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

    console.log(this.message3);
    /*for (const val of this.testVideoParentVersEnfant.listArticles) {
      console.log(val);
      console.log(this.message);
    }*/
  }

  ngAfterViewInit() {
  }
  public sanitizeSafeVideoId(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + videoId);
  }

}
