import { TestBed } from '@angular/core/testing';

import { TodolistApiService } from './todolist-api.service';

describe('TodolistApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodolistApiService = TestBed.get(TodolistApiService);
    expect(service).toBeTruthy();
  });
});
