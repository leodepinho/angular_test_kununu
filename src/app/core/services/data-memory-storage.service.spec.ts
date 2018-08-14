import { TestBed, inject } from '@angular/core/testing';

import { DataMemoryStorageService } from './data-memory-storage.service';

describe('DataMemoryStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataMemoryStorageService]
    });
  });

  it('saveData() should save key and value in storage', inject([DataMemoryStorageService], (service: DataMemoryStorageService) => {
    expect(service.saveData('currentMock','mock'));
  }));
  it('getValue() should return real value', inject([DataMemoryStorageService], (service: DataMemoryStorageService) => {
    expect(service.getValue('currentMock')).toEqual('mock');
  }));
  it('getValue() should return null for not founded keys', inject([DataMemoryStorageService], (service: DataMemoryStorageService) => {
    expect(service.getValue('currentMock2')).toEqual(null);
  }));
  it('removeData() should remove key in storage', inject([DataMemoryStorageService], (service: DataMemoryStorageService) => {
    expect(service.removeValue('currentMock'));
  }));

});
