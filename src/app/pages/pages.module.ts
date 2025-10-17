import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TitleComponent } from '../components/title/title.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    ProductsComponent,
    AboutusComponent,
    NotfoundComponent,
    TitleComponent
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    AboutusComponent,
    NotfoundComponent
  ]
})
export class PagesModule { }
