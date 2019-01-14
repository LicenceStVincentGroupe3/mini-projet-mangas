import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInfosComponent } from './display-infos.component';

describe('DisplayInfosComponent', () => {
  let component: DisplayInfosComponent;
  let fixture: ComponentFixture<DisplayInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
