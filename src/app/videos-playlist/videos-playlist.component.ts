import { Component, Input } from '@angular/core';
import { YoutubePlayerService } from '../shared/services/youtube-player.service';
import { PlaylistStoreService } from '../shared/services/playlist-store.service';

@Component({
  selector: 'app-videos-playlist',
  templateUrl: './videos-playlist.component.html',
  styleUrls: ['./videos-playlist.component.css']
})
export class VideosPlaylistComponent {

  @Input() playlistToggle;
  @Input() videoPlaylist;
  @Input() playlistNames;

  constructor(
    private youtubePlayer: YoutubePlayerService,
    private playlistService: PlaylistStoreService
  ) {
    this.youtubePlayer.videoChangeEvent.subscribe(event => event);
  }

  play(id: string): void {
    let videoText = '(Aucun)';

    this.videoPlaylist.forEach((video, index) => {
      if (video.id === id) {
        videoText = video.snippet.title;
      }
    });

    this.youtubePlayer.playVideo(id, videoText);
  }

  removeFromPlaylist(video: Object): void {
    this.videoPlaylist.splice(this.videoPlaylist.indexOf(video), 1);
    this.playlistService.removeFromPlaylist(video);
  }
}
