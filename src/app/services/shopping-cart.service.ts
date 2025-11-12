import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../app/pages/products/product.modal';
import { PRODUCTS } from '../../app/pages/products/product-data';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private readonly storageKey = 'cartItemIds';
  private isBrowser: boolean;
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.cartItemsSubject.next(this.loadItems());
    }
  }

  private loadItems(): Product[] {
    if (!this.isBrowser) return [];
    const stored = localStorage.getItem(this.storageKey);
    const ids = stored ? JSON.parse(stored) : [];
    return PRODUCTS.filter(p => ids.includes(p.id));
  }

  private saveItems(ids: number[]): void {
    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, JSON.stringify(ids));
      this.cartItemsSubject.next(PRODUCTS.filter(p => ids.includes(p.id)));
    }
  }

  getItems$() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(id: number): void {
    if (!this.isBrowser) return;
    const ids = this.getStoredIds();
    if (!ids.includes(id)) {
      ids.push(id);
      this.saveItems(ids);
    }
  }

  removeFromCart(id: number): void {
    if (!this.isBrowser) return;
    const ids = this.getStoredIds().filter(itemId => itemId !== id);
    this.saveItems(ids);
  }

  clearCart(): void {
    if (this.isBrowser) {
      this.saveItems([]);
    }
  }

  private getStoredIds(): number[] {
    if (!this.isBrowser) return [];
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
}
