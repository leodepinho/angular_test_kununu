import { TestBed, inject } from '@angular/core/testing';

import { DataMemoryStorageService } from './data-memory-storage.service';

describe('DataMemoryStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataMemoryStorageService]
    });
  });

  it('should be created', inject([DataMemoryStorageService], (service: DataMemoryStorageService) => {
    expect(service).toBeTruthy();
  }));
});
