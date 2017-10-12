import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component, HomeComponent } from './pages';

export const routes: Routes = [
  { path: '404', component: Error404Component },
  { path: '', component: HomeComponent },
];
