import { Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-traitement-articles',
  templateUrl: './traitement-articles.component.html',
  styleUrls: ['./traitement-articles.component.css']
})
export class TraitementArticlesComponent implements OnInit, AfterViewInit {

  listArticles: string;
  element: string;

  constructor() { }



  ngOnInit() {
    this.element = (<HTMLInputElement>document.getElementById('ajout')).value;
    this.element = localStorage.getItem('ajout');
    console.log(this.element);
    /*for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      this.listArticles = value;
    }
    console.log(this.listArticles);*/
  }

  ngAfterViewInit() {
  }
}
