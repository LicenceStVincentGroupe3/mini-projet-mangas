import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {

  imageLogo = "../assets/img/logo-site.png";

  constructor() { }

  ngOnInit() {
  }

}