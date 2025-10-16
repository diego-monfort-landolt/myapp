import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ProductsComponent,
    AboutusComponent
  ],
  exports: [
  ]
})
export class PagesModule { }
