import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "../../components/main/main.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
pageTitle = 'Inicio de mi Pagina Angular';
  
  constructor() {}
  onDataCheck(e: any) {
    console.log(e);
  }
}
