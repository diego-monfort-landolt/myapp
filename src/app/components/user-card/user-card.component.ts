import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  name = 'Diaz';
  surname = 'Sarah';
  age = 33;
  married = true;
  address = {
    country: 'UK',
    city: 'Damascus',
    street: 'Liberty'
  };
  private dni = '34432432';
  public nationality = 'Japanese';
  getDate() {
    return new Date();
  }
}
export class serComponent {
  users = [
    {
      name: 'Ana',
      surname: 'García',
      age: 28,
      nationality: 'Española',
      married: true,
      address: {
        country: 'España',
        city: 'Madrid',
        street: 'Calle Mayor 12'
      }
    },
    {
      name: 'Luis',
      surname: 'Martínez',
      age: 35,
      nationality: 'Mexicano',
      married: false,
      address: {
        country: 'México',
        city: 'Guadalajara',
        street: 'Av. Juárez 45'
      }
    }
  ];

  getDate(): string {
    return new Date().toLocaleDateString();
  }
}

