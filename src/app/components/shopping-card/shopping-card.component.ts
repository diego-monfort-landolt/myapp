import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../pages/products/product.modal';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
})
export class ShoppingCardComponent implements OnInit {
[x: string]: any;
  cartItems: Product[] = [];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
