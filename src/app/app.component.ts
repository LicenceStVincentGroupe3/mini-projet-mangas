import { Component, OnInit, AfterViewInit } from '@angular/core';
import { YoutubeApiService } from './shared/services/youtube-api.service';
import { YoutubePlayerService } from './shared/services/youtube-player.service';
import { PlaylistStoreService } from './shared/services/playlist-store.service';
import * as $ from 'jquery';
import { GoogleAuthService } from 'ng-gapi';
import { UserService } from './user-service.service';
import { GoogleApiService } from 'ng-gapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  imageLogo = "../assets/img/logo-site.png";

  public videoList = [];
  public videoPlaylist = [];
  public loadingInProgress = false;
  public playlistToggle = false;
  public playlistNames = false;
  public playlistElement: any;

  public sheetId: string;
  public sheet: any;
  public foundSheet: any;

  constructor(
    private youtubeService: YoutubeApiService,
    private youtubePlayer: YoutubePlayerService,
    private playlistService: PlaylistStoreService,
    private userService: UserService,
    private authService: GoogleAuthService,
    private gapiService: GoogleApiService
  ) {
    // First make sure gapi is loaded can be in AppInitilizer
    this.gapiService.onLoad().subscribe();
    this.videoPlaylist = this.playlistService.retrieveStorage().playlists;
  }

  ngOnInit() {
    // Animation de menu lorsqu'en  faisant un sroll en qui quitte le sommet de la page
    $(function(){
      let navbar = $('.navbar');
      let navbarBtn = $('#btnNavbarToggle');

      $(window).scroll(function(){
        if($(window).scrollTop() <= 40){
          navbar.removeClass('navbar-scroll');

          navbar.addClass('taille-text-avant-scroll');
          navbar.removeClass('taille-text-apres-scroll');
        }
        else {
          navbar.addClass('navbar-scroll');

          navbar.addClass('taille-text-apres-scroll');
          navbar.removeClass('taille-text-avant-scroll');
        }
      });

      navbarBtn.click(function(){
        $('#btnPlaylistToggle').toggle()
        $('#user').toggle()
      });
    });
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }

  ngAfterViewInit() {
    this.playlistElement = document.getElementById('playlist');
  }

  handleSearchVideo(videos: Array<any>): void {
    this.videoList = videos;
  }

  checkAddToPlaylist(video: any): void {
    if (!this.videoPlaylist.some((e) => e.id === video.id)) {
      this.videoPlaylist.push(video);
      this.playlistService.addToPlaylist(video);

      let inPlaylist = this.videoPlaylist.length - 1;

      setTimeout(() => {
        let topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
        this.playlistElement.scrollTop = topPos - 100;
      });
    }
  }

  togglePlaylist(): void {
    this.playlistToggle = !this.playlistToggle;
    setTimeout(() => {
      this.playlistNames = !this.playlistNames;
    }, 200);
  }
}
