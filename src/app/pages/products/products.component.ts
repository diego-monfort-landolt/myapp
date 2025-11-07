import { Component } from '@angular/core';

import { PRODUCTS } from './product-data';
import { Product } from './product.modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  pageTitle = 'Mis Productos';
  products = PRODUCTS;
  saved: Product[] = [];
  cart: Product[] = [];
  showForm = false;
  contact = { name: '', address: '' };

  save(product: Product) {
    if (!this.saved.includes(product)) this.saved.push(product);
  }

  buy(product: Product) {
    if (product['available']) {
      this.cart = [...this.saved];
      this.showForm = true;
    }
  }
  removeItem(index: number) {
  this.cart.splice(index, 1);
}
clearCart() {
  this.cart = [];
}
cancelForm() {
  this.showForm = false;
  this.cart = [];
  this.contact = { name: '', address: '' };
}
}