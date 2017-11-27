import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {MovielistComponent} from './movielist/movielist.component';
import {DirectorsComponent} from './directors/directors.component';

const routes: Routes = [
{path: 'movielist', component: MovielistComponent},
{path: 'directors', component: DirectorsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
