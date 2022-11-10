import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { DonutsComponent } from './components/donuts/donuts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';


const appRoutes:Routes=[
  { path:'donut', component:DonutsComponent},
  { path:'donut/:id', component:DetailsComponent},
  { path:'donut/:id/cart', component:CartComponent},
  { path:'',redirectTo:'/donut', pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DetailsComponent,
    CartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
