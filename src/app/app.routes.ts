import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];
