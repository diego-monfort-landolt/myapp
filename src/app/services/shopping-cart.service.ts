import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../pages/products/product.modal';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    const current = this.cartSubject.getValue();
    if (!current.find(p => p.id === product.id)) {
      this.cartSubject.next([...current, product]);
    }
  }

  removeFromCart(id: number): void {
    const updated = this.cartSubject.getValue().filter(p => p.id !== id);
    this.cartSubject.next(updated);
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }
}
