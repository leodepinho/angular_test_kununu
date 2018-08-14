import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {TranslationService} from "./app/core/services/translation.service";
import {DataMemoryStorageService} from "./app/core/services/data-memory-storage.service";

if (environment.production) {
  enableProdMode();
}

const translation = new TranslationService(new DataMemoryStorageService());
/**
 * Get the translation providers to bootstrap the application
 */
translation.getTranslationProviders().then(providers => {
  const options:any = { providers };
  platformBrowserDynamic().bootstrapModule(AppModule,options)
    .catch(err => console.log(err));
});
