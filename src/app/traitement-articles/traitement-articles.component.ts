import { Component, OnInit, Output, EventEmitter, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-traitement-articles',
  templateUrl: './traitement-articles.component.html',
  styleUrls: ['./traitement-articles.component.css']
})
export class TraitementArticlesComponent implements OnInit, AfterViewInit {

  listArticles = [];
  element: string;

  // Envoi d'une donnée au composant parent
  @Output() envoiArticle = new EventEmitter<any>();

  constructor() { }

  // Envoi d'une donnée au composant parent
  // -----------------
  EnvoiArticle() {
    this.envoiArticle.emit(this.listArticles);
    console.log(this.listArticles);
  }
  // -----------------



  ngOnInit() {
  }

  ngAfterViewInit() {
    this.element = (<HTMLInputElement>document.getElementById('description')).value;
    this.element = (<HTMLInputElement>document.getElementById('ajout')).value;
    this.element = localStorage.getItem('description');
    this.element = localStorage.getItem('ajout');
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      this.listArticles.push(value);
    }
  }

  addArticle(article: string, description: string) {
    this.listArticles.push(article, description );
  }
}
