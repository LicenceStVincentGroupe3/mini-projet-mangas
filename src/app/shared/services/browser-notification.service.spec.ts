import { TestBed } from '@angular/core/testing';

import { BrowserNotificationService } from './browser-notification.service';

describe('BrowserNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserNotificationService = TestBed.get(BrowserNotificationService);
    expect(service).toBeTruthy();
  });
});
