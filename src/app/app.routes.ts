import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Inicio' },
  { path: 'products', component: ProductsComponent, title: 'Productos' },
  { path: 'about-us', component: AboutusComponent, title: 'Sobre mi' },
  { path: 'shopping-card', component: ShoppingCardComponent , title: 'Mi compra' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent, title: '404' },
];
