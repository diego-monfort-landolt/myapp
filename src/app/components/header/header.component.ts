import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { RouterModule } from '@angular/router';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


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
  pageTitle = '';
  
constructor(private router: Router) {
this.router.events.pipe(
  filter(event => event instanceof NavigationEnd)
).subscribe((event) => {
  const navEnd = event as NavigationEnd;
  const url = navEnd.urlAfterRedirects;

  if (url.includes('/home')) this.pageTitle = 'Bienvenido a la Página Principal';
  else if (url.includes('/about-us')) this.pageTitle = 'Sobre mi';
  else if (url.includes('/products')) this.pageTitle = 'Nuestros Productos';
  else this.pageTitle = 'Mi App Angular';
});

}
 onDataCheck(e: any) {
    console.log(e);
  }
}