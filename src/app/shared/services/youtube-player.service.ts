import { Injectable, Output, EventEmitter } from '@angular/core';

let _window: any = window;

@Injectable()
export class YoutubePlayerService {

  public yt_player;
  private currentVideoId: string;

  @Output() videoChangeEvent: EventEmitter<any> = new EventEmitter(true);
  @Output() playPauseEvent: EventEmitter<any> = new EventEmitter(true);
  @Output() currentVideoText: EventEmitter<any> = new EventEmitter(true);

  constructor() { }

  createPlayer(): void {
    let interval = setInterval(() => {
      if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
        this.yt_player = new _window.YT.Player('yt-player', {
          width: '440',
          height: '250',
          playerVars: {
            iv_load_policy: '3',
            rel: '0'
          }
        });
        clearInterval(interval);
      }
    }, 100);
  }

  playVideo(videoId: string, videoText?: string): void {
    this.yt_player.loadVideoById(videoId);
    this.currentVideoId = videoId;
    this.currentVideoText.emit(videoText);
  }
}
