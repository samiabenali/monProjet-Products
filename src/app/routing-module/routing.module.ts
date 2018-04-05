import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WelcomeComponent} from '../components/welcome/welcome.component';
import {NotFoundComponent} from '../components/not-found/not-found.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';

const routes: Route[] = [
{ path: 'welcome', component: WelcomeComponent},
{ path: 'list', component: ProductListComponent},
{ path: '', component: WelcomeComponent, pathMatch: 'full'},
{ path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class RoutingModule { }
