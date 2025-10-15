import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [TitleComponent,]
})
export class HeaderComponent {
  pageTitle = 'My Application Angular';
  constructor() {}

  onDataCheck(e: any) {
    console.log(e);
  }

}