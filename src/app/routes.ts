import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component, HomeComponent } from './pages';

export const routes: Routes = [
  { path: '404', component: Error404Component },
  { path: 'erotica', component: HomeComponent },
  { path: 'rando-smut', redirectTo: '/erotica' },
  { path: '', redirectTo: '/erotica', pathMatch: 'full' },
];
