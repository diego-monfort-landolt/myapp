import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "../../components/main/main.component";
import { AvatarComponent } from "../../components/avatar/avatar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainComponent, AvatarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
