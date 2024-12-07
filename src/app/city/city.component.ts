import {Component} from '@angular/core';
import {City} from '../city';
import {CitiesService} from '../cities.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-city',
  imports: [FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  currentCity = new City();
  title: string = ''
  errorMessage: string = ''

  constructor(
    private cityService: CitiesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.cityService.getCity(parseInt(id)).subscribe(data => {
        this.currentCity = data
        this.title = data.CityName
      });
    } else { this.title = 'Maak een nieuwe stad' }
  }

  saveCity() {
    const handleError = (error: any): void => {
      console.error(error);
      const errors = error?.error?.errors;
      this.errorMessage = errors?.Year?.[0] ?? error.error ?? 'An unexpected error occurred';
    };

    const navigateToCities = (): void => {
      this.router.navigateByUrl('/cities');
    };

    const cityOperation = this.currentCity.CityID
      ? this.cityService.updateCity(this.currentCity)
      : this.cityService.createCity(this.currentCity);

    cityOperation.subscribe({
      next: navigateToCities,
      error: handleError
    });
  }

  deleteCity() {
    this.cityService.deleteCity(this.currentCity.CityID).subscribe();
  }
}
