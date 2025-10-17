import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [UserCardComponent]
})
export class MainComponent {
  nombre = 'Diego';
  descripcion = 'Soy desarrollador frontend y full stack con pasión por la automatización, el diseño elegante y la documentación clara. Me especializo en crear interfaces intuitivas, accesibles y visualmente atractivas, combinando precisión técnica con una fuerte sensibilidad estética. Disfruto optimizando procesos mediante scripts y herramientas que mejoran la eficiencia, reducen errores y facilitan el mantenimiento a largo plazo. Además, valoro profundamente la claridad en la comunicación técnica: creo documentación multilingüe que no solo explica el “cómo”, sino también el “por qué”, fomentando la colaboración y el aprendizaje dentro de los equipos. Mi enfoque combina buenas prácticas de desarrollo, metodologías ágiles y una mentalidad orientada a soluciones reutilizables y escalables.Siempre estoy en búsqueda de nuevos retos que me permitan crecer, compartir conocimiento y contribuir a proyectos con impacto real.';
  aprendiendo = 'Actualmente estoy perfeccionando mis habilidades en Angular, creando componentes reutilizables, integrando librerías modernas y aplicando buenas prácticas.';
}
