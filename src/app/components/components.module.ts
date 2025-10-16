import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserReviewComponent } from './user-review/user-review.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderComponent, 
    MainComponent, 
    FooterComponent,
    AvatarComponent,
    UserCardComponent,
    UserReviewComponent,
  ],
  exports: [
    HeaderComponent, 
    MainComponent,
    FooterComponent,
    AvatarComponent,
    UserReviewComponent
  ],
})
export class ComponentsModule { }
