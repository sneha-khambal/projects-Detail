import { TestBed } from '@angular/core/testing';

import { HtmlCssService } from './html-css.service';

describe('HtmlCssService', () => {
  let service: HtmlCssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlCssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
