import { ApplicationConfig, DEFAULT_CURRENCY_CODE, importProvidersFrom, LOCALE_ID, provideBrowserGlobalErrorListeners,provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { InMemoryDataService } from './api/in-memory-data-service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

export const appConfig: ApplicationConfig = {
  providers: [

    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
    ),


    { provide: LOCALE_ID, useValue: 'fr-TN' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'TND' }

  ]
};
