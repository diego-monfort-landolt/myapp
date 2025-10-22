import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  creator: string;
  link: string;
}

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.scss'
})
export class ProjectGalleryComponent {
   projects: Project[] = [
    {
      title: 'Jardinería - One Pager',
      description: 'Página de aterrizaje elegante para servicios de jardinería',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/06/01/51/asiatic-lily-4255000_640.jpg',
      creator: 'Diego Monfort Landolt',
      link: 'https://www.gartenbaulandolt.ch/'
    },
    {
      title: 'JavaScript Quiz',
      description: 'Cuestionario dinámico en JS con puntuación automática',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/04/09/03/04/ai-generated-8684869_640.jpg',
      creator: 'Diego Monfort Landolt',
      link: 'https://diego-monfort-landolt.github.io/JavaScriptQuiz/'
    },
    {
      title: 'Finanz-Tracker',
      description: 'Gestiona tus finanzas con elegancia y facilidad',
      imageUrl: 'https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_640.jpg',
      creator: 'Diego Monfort Landolt',
      link: 'https://diego-monfort-landolt.github.io/finance-app/'
    },
  ];
}
