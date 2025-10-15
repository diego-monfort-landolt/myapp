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

}
