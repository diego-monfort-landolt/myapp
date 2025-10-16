import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserReviewComponent } from './components/user-review/user-review.component';
import { AvatarComponent } from './components/avatar/avatar.component';



@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    MainComponent,
    FooterComponent,
    UserReviewComponent,
    AvatarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
