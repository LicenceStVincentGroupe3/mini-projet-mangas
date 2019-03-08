import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-site',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  imageLogo = "../assets/img/logo-site.png";

  constructor() { }

  ngOnInit() {
    // Animation de menu lorsqu'en  faisant un sroll en qui quitte le sommet de la page
    $(function(){
      let navbar = $('.navbar');

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
    });
  }

}
