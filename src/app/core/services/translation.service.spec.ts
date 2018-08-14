import { TestBed, inject } from '@angular/core/testing';

import { TranslationService } from './translation.service';
import {DataMemoryStorageService} from "./data-memory-storage.service";

describe('TranslationService', () => {
  let valueServiceSpy: jasmine.SpyObj<DataMemoryStorageService>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('DataMemoryStorageService', ['getValue']);
    TestBed.configureTestingModule({
      providers: [TranslationService,{ provide: DataMemoryStorageService, useValue: spy }]
    });
  });



  it('getTranslationProviders() should return value from a promise', inject([TranslationService], (service: TranslationService) => {
    (done: DoneFn) => {
      service.getTranslationProviders().then(value => {
        expect(value).toBe('promise value');
        done();
      });
    }
  }));
  it('getFile() should return value from a promise', inject([TranslationService], (service: TranslationService) => {
    (done: DoneFn) => {
      service.getFile('mock').then(value => {
        expect(value).toBe('promise value');
        done();
      });
    }
  }));
  it('setLenguages() should return array of lenguages', inject([TranslationService], (service: TranslationService) => {
    expect(service.setLenguages()).toEqual([ 'english', 'spanish' ]);
  }));
  it('setCulture() should return real value', inject([TranslationService], (service: TranslationService) => {
    expect(service.setCulture()).toEqual('us');
  }));
  it('getLocale() should return real value', inject([TranslationService], (service: TranslationService) => {
    expect(service.getLocale('us','english')).toEqual('en-US');
  }));

});
