/*
  The code below was the beginnings of an attempt to deal with some quirks of trying to get an SPA going on GitHub pages.
  It worked but it was ugly. What it added was not worth the clobbering everything else took.
*/
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component, HomeComponent } from './pages';

export const routes: Routes = [
  { path: '404', component: Error404Component },
  { path: 'erotica', component: HomeComponent },
  { path: 'rando-smut', redirectTo: '/erotica' },
  { path: '', redirectTo: '/erotica', pathMatch: 'full' },
];
