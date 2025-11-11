import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../pages/products/product.modal';
import { Subscription } from 'rxjs';
import { PRODUCTS } from '../../pages/products/product-data';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss'
})
export class ShoppingCardComponent implements OnInit, OnDestroy {
  pageTitle = 'Mi Compra';
  cartItems: Product[] = [];
  isBrowser: boolean;
  private subscription!: Subscription;

  constructor(
    private cartService: ShoppingCartService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.subscription = this.cartService.getItems$().subscribe(items => {
        this.cartItems = items;
      });
    }
  }

  removeItem(id: number): void {
    if (this.isBrowser) {
      this.cartService.removeFromCart(id);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
