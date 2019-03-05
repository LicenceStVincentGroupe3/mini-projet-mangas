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
import { WikiComponent } from './wiki/wiki.component';
import { ContenuArticleComponent } from './contenu-article/contenu-article.component';
import { TraitementArticlesComponent } from './traitement-articles/traitement-articles.component';
import { TraitementArticlesDirective } from './traitement-articles.directive';

const appRoutes: Routes = [
  {path: 'wiki', component: WikiComponent },
  {path: '', component: ListeArticlesComponent },
  {path: 'contenu-article', component: ContenuArticleComponent },
  {path: 'display-infos', component: DisplayInfosComponent },
  {path: 'traitement-articles', component: TraitementArticlesComponent }
];

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
    TraitementArticlesComponent,
    TraitementArticlesDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
