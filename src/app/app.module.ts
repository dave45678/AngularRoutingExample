import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovielistComponent } from './movielist/movielist.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { DirectorsComponent } from './directors/directors.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    DirectorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  RouterModule.forRoot([
  {
    path: 'movielist',
    component: MovielistComponent
  },
    {
      path: 'directors',
      component: DirectorsComponent
    }
  ]),
  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
