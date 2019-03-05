import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayInfosComponent } from './display-infos/display-infos.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TodoListApiService } from './todo-list-api.service';
import {RouterModule, Routes} from '@angular/router';
import { ContenuArticleComponent } from './contenu-article/contenu-article.component';
import { TraitementArticlesComponent } from './traitement-articles/traitement-articles.component';
import { AjoutPlaylistComponent } from './ajout-playlist/ajout-playlist.component';
import {
    GoogleApiModule, 
    GoogleApiService, 
    GoogleAuthService, 
    NgGapiClientConfig, 
    NG_GAPI_CONFIG,
    GoogleApiConfig
} from "ng-gapi";

import { UserService } from './user-service.service';

const appRoutes: Routes = [
  {path: '', component: ListeArticlesComponent },
  {path: 'contenu-article', component: ContenuArticleComponent },
  {path: 'display-infos', component: DisplayInfosComponent },
  {path: 'traitement-articles', component: TraitementArticlesComponent }
];

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
    DisplayInfosComponent,
    BarreRechercheComponent,
    ListeArticlesComponent,
    MenuComponent,
    PaginationComponent,
    ContenuArticleComponent,
    TraitementArticlesComponent,
    AjoutPlaylistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    RouterModule.forRoot(appRoutes, {enableTracing: true })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
