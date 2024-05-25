import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should showHeader start false', () => {
    expect(service.showHeader).toBeFalsy();
  });

  it('should setShowHeader set _showHeader to true', () => {
    expect(service.showHeader).toBeFalsy();
    service.setShowHeader(true);
    expect(service.showHeader).toBeTruthy();
  });

  it('should setShowHeader set _showHeader to false', () => {
    expect(service.showHeader).toBeFalsy();
    service.setShowHeader(true);
    expect(service.showHeader).toBeTruthy();
    service.setShowHeader(false);
    expect(service.showHeader).toBeFalsy();
  });
});
