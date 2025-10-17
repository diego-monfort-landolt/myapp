import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule, 
    RouterOutlet,
    AppRoutingModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  [x: string]: any;
}
