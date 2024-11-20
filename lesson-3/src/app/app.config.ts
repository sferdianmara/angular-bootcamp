import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient()]
};

import { InjectionToken } from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
export interface AppConfig {
  title: string;
}
export const APP_CONFIG = new InjectionToken<AppConfig>('my app config');
