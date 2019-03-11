// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// Composants
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideosPlaylistComponent } from './videos-playlist/videos-playlist.component';
// Services
import { YoutubeApiService } from './shared/services/youtube-api.service';
import { YoutubePlayerService } from './shared/services/youtube-player.service';
import { PlaylistStoreService } from './shared/services/playlist-store.service';
// Pipes
import { VideoDurationPipe } from './shared/pipes/video-duration.pipe';
import { VideoLikesViewsPipe } from './shared/pipes/video-likes-views.pipe';
import { VideoNamePipe } from './shared/pipes/video-name.pipe';

import {
    GoogleApiModule, 
    GoogleApiService, 
    GoogleAuthService, 
    NgGapiClientConfig, 
    NG_GAPI_CONFIG,
    GoogleApiConfig
} from "ng-gapi";
import { UserService } from './user-service.service';

let gapiClientConfig: NgGapiClientConfig = {
    client_id: "36337314593-ujdd857mrvmlt2k3qg1vc72fkn4289d0.apps.googleusercontent.com",
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    ux_mode: "redirect",
    redirect_uri: "http://localhost:4200",
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile"
    ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListArticlesComponent,
    VideoPlayerComponent,
    VideosPlaylistComponent,

    VideoDurationPipe,
    VideoLikesViewsPipe,
    VideoNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [
    YoutubeApiService,
    YoutubePlayerService,
    PlaylistStoreService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
