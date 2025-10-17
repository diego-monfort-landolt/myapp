import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    TitleComponent,
    RouterModule
  ]
})
export class HeaderComponent {
  pageTitle = 'My Application Angular';
  
  constructor() {}
  onDataCheck(e: any) {
    console.log(e);
  }

}