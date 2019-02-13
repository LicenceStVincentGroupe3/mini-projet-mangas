import { TestBed } from '@angular/core/testing';

import { TodoListApiService } from './todo-list-api.service';

describe('TodoListApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListApiService = TestBed.get(TodoListApiService);
    expect(service).toBeTruthy();
  });
});
