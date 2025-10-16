import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import KeenSlider from 'keen-slider';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';



@Component({
  selector: 'app-user-review',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})

export class UserReviewComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  slider: any = null;
  users: any[] = [];

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.http.get<any>('https://randomuser.me/api/?results=6&nat=es')
      .subscribe((res: any) => {
        this.users = res.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          city: user.location.city,
          photo: user.picture.large,
          rating: Math.floor(Math.random() * 3) + 3
        }));
      });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        if (this.sliderRef?.nativeElement) {
          this.slider = new KeenSlider(this.sliderRef.nativeElement, {
            loop: true,
            slides: { perView: 1, spacing: 15 },
            breakpoints: {
              '(min-width: 540px)': { slides: { perView: 2, spacing: 10 } },
              '(min-width: 1024px)': { slides: { perView: 3, spacing: 20 } }
            },
            created: (slider) => {
              setInterval(() => slider.next(), 3000);
            }
          });
        }
      });
    }
  }
}

