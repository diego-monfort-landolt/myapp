import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ProductsComponent } from './pages/products/products.component';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ComponentsModule,
    ProductsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
