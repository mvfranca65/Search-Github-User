import { Routes } from '@angular/router';
import { HomeComponent } from './user-query/components/home/home.component';
import { SearchComponent } from './user-query/components/search/search.component';

export const ROUTES: Routes = [
  { path: '', component: SearchComponent},
  { path: ':id', component: HomeComponent },
];