import { TestBed } from '@angular/core/testing';

import { ContactbookService } from './contactbook.service';

describe('ContactbookService', () => {
  let service: ContactbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
