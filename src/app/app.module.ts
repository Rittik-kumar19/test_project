import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { ShortenPipe } from './shorten.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';
import { ImagecanvaComponent } from './imagecanva/imagecanva.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { ReloginComponent } from './relogin/relogin.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'cart', component: FirstcomponentComponent },
//   { path: 'product/:fruit', component: ProductComponent }
// ];
const routes: Routes = [
  // { path: 'first', component: TableComponent },
  // { path: 'second', component: ImagecanvaComponent },
  // { path: '', redirectTo: '/first', pathMatch: 'full' }
  { path: 'relogin/:name', component: ReloginComponent},
  { path: '**', component: HomeviewComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    SecondcomponentComponent,
    ShortenPipe,
    HomeComponent,
    FirstcomponentComponent,
    ProductComponent,
    TableComponent,
    ImagecanvaComponent,
    HomeviewComponent,
    ReloginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
