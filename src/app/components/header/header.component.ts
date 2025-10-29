import { Component } from '@angular/core';
import { TitleComponent } from "../title/title.component";
import { RouterModule } from '@angular/router';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewChild, ElementRef } from '@angular/core';


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
  avatarUrl = 'https://cdn.pixabay.com/photo/2017/11/10/05/46/user-2935524_640.png';

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  
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

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarUrl = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }


 onDataCheck(e: any) {
    console.log(e);
  }
}