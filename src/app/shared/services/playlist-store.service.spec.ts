import { TestBed } from '@angular/core/testing';

import { PlaylistStoreService } from './playlist-store.service';

describe('PlaylistStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistStoreService = TestBed.get(PlaylistStoreService);
    expect(service).toBeTruthy();
  });
});
