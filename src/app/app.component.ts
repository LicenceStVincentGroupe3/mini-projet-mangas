import {AfterViewInit, OnInit, Component, ElementRef, ViewChild} from '@angular/core';
import {TodoListApiService} from './todo-list-api.service';
import {TraitementArticlesComponent} from './traitement-articles/traitement-articles.component';
import {TraitementArticlesDirective} from './traitement-articles.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  extraIngredient: string;
  message: any;
  test: any;

  @ViewChild(TraitementArticlesDirective)
  set appTraitementArticles(directive: TraitementArticlesDirective) {
    this.extraIngredient = directive.ingredient;
  }

  @ViewChild('someInput') someInput: ElementRef;

  @ViewChild(TraitementArticlesComponent)
    article: TraitementArticlesComponent;


  title = 'ManA';

  onDisconnect(disconnected: boolean) {
    console.log(disconnected);
  }

  onSendArticle(articleAdded: any) {
    console.log(articleAdded);
  }

  ngOnInit() {
    this.message = 'TEST';
    this.test = this.article;
  }

  ngAfterViewInit() {
    // console.log(this.extraIngredient); // mayo
    // console.log(this.traitement);
  }
}

