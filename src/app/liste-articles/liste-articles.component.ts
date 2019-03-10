import { Component, Input, Output, EventEmitter } from '@angular/core';
import { YoutubePlayerService } from '../shared/services/youtube-player.service';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent {

  @Input() videoList;
  @Input() loadingInProgress;
  @Output() videoPlaylist = new EventEmitter();

  constructor(
    private youtubePlayer: YoutubePlayerService
  ) { }

  play(video: any): void {
    this.youtubePlayer.playVideo(video.id, video.snippet.title);
    this.addToPlaylist(video);
  }

  addToPlaylist(video: any): void {
    this.videoPlaylist.emit(video);
  }
}
