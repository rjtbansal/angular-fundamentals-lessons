import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // withComponentInputBinding is required to bind route params to component inputs
  providers: [provideRouter(routes, withComponentInputBinding())],
};
