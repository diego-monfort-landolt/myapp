import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'about-us', component: AboutusComponent }
];
