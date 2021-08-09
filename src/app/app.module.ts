import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './user-query/components/search/search.component';
import { HomeComponent } from './user-query/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { RepositoriesComponent } from './user-query/components/repositories/repositories.component';
import { StarredComponent } from './user-query/components/starred/starred.component';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './user-query/components/profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { UserQueryEffects } from './user-query/store/user-query.effects';
import { StoreModule } from '@ngrx/store';
import { UserQueryReducers } from './user-query/store/user-query.reducers';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    RepositoriesComponent,
    StarredComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('userQuery', UserQueryReducers),
    EffectsModule.forRoot([UserQueryEffects]),
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
