import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayInfosComponent } from './display-infos/display-infos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import {RouterModule, Routes} from "@angular/router";
import { WikiComponent } from './wiki/wiki.component';
import { ContenuArticleComponent } from './contenu-article/contenu-article.component';
// Services
import { YoutubeApiService } from './shared/services/youtube-api.service';
import { YoutubePlayerService } from './shared/services/youtube-player.service';
import { PlaylistStoreService } from './shared/services/playlist-store.service';
import { NotificationService } from './shared/services/notification.service';
import { BrowserNotificationService } from './shared/services/browser-notification.service';
// Pipes
import { VideoDurationPipe } from './shared/pipes/video-duration.pipe';
import { VideoLikesViewsPipe } from './shared/pipes/video-likes-views.pipe';
import { VideoNamePipe } from './shared/pipes/video-name.pipe';
// Directives
import { LazyScrollDirective } from './shared/directives/lazy-scroll/lazy-scroll.directive';
import { VideosPlaylistComponent } from './videos-playlist/videos-playlist.component';

/*const appRoutes: Routes = [
  { path: '', component: ListeArticlesComponent },
  { path: 'display-info', component: DisplayInfosComponent },
  { path: 'contenu-article', component: ContenuArticleComponent }
]*/

@NgModule({
  declarations: [
    AppComponent,
    DisplayInfosComponent,
    BarreRechercheComponent,
    ListeArticlesComponent,
    MenuComponent,
    PaginationComponent,
    WikiComponent,
    ContenuArticleComponent,

    VideoDurationPipe,
    VideoLikesViewsPipe,
    VideoNamePipe,

    LazyScrollDirective,

    VideoPlayerComponent,

    VideosPlaylistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    /*RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )*/
  ],
  providers: [
    YoutubeApiService,
    YoutubePlayerService,
    PlaylistStoreService,
    NotificationService,
    BrowserNotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
