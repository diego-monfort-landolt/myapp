import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../pages/products/product.modal';


@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
  providers: [ShoppingCartService]
})
export class ShoppingCardComponent implements OnInit {
  pageTitle = 'Carrito de Compra';
  cartItems: Product[] = [];
  
  

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.cartItems = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}
export { Product };

