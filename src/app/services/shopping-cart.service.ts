import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../app/pages/products/product-data';
import { Product } from '../components/shopping-card/shopping-card.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private items: Product[] = [];

  getItems(): Product[] {
    return this.items;
  }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  removeFromCart(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  clearCart(): void {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.price || 0), 0);
  }
}
