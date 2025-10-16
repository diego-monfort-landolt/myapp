import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserReviewComponent } from './components/user-review/user-review.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ComponentsModule } from './components/components.module';



@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ComponentsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
