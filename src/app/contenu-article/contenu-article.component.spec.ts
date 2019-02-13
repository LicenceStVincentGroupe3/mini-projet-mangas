import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuArticleComponent } from './contenu-article.component';

describe('ContenuArticleComponent', () => {
  let component: ContenuArticleComponent;
  let fixture: ComponentFixture<ContenuArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenuArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
