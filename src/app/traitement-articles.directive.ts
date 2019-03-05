import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTraitementArticles]'
})
export class TraitementArticlesDirective {
  ingredient = 'mayo';

  constructor(elem: ElementRef, renderer: Renderer2) {
    const bacon = renderer.createText('test test');
    // renderer.appendChild(elem.nativeElement, bacon);
  }
}
