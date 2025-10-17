import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  nombre = 'Diego';
  origen = 'Suiza, actualmente en Benicàssim, España';
  perfil = 'Soy un desarrollador full stack con enfoque en frontend, apasionado por la automatización, la documentación clara y el diseño elegante.';
  enfoque = 'Me gusta crear soluciones reutilizables, interfaces limpias y trabajar en equipo para lograr resultados sostenibles y escalables.';
}
