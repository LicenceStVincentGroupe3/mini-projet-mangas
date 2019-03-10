import { Component, Input, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { YoutubePlayerService } from '../shared/services/youtube-player.service';
import { NotificationService } from '../shared/services/notification.service';
import { BrowserNotificationService } from '../shared/services/browser-notification.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements AfterContentInit  {

  public currentVideoText = '(Vide)';
  public playingEvent = 'pause';
  public minPlayer = true;
  public superMinPlayer = false;


  constructor(
    private youtubePlayer: YoutubePlayerService
  ) {
    this.youtubePlayer.playPauseEvent.subscribe(event => this.playingEvent = event);
    this.youtubePlayer.currentVideoText.subscribe(event => this.currentVideoText = event || '(Vide)');
  }

  ngAfterContentInit() {
    let doc = window.document;
    let playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApi);

    this.youtubePlayer.createPlayer();
  }

  togglePlayer(): void {
    this.minPlayer = !this.minPlayer;
    this.superMinPlayer = false;
  }

  minimizePlayer(): void {
    this.superMinPlayer = !this.superMinPlayer;
  }
}
