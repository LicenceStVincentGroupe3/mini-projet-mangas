import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementArticlesComponent } from './traitement-articles.component';

describe('TraitementArticlesComponent', () => {
  let component: TraitementArticlesComponent;
  let fixture: ComponentFixture<TraitementArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitementArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
