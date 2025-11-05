import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

import { AppRoutingModule } from '../app-routing.module';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';


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
    ProjectGalleryComponent,
    AppRoutingModule,
    ShoppingCardComponent,
  ],
  exports: [
    HeaderComponent, 
    MainComponent,
    FooterComponent,
    AvatarComponent,
    UserReviewComponent,
    AppRoutingModule,
    ProjectGalleryComponent,
    ShoppingCardComponent
    
  ],
})
export class ComponentsModule { }
