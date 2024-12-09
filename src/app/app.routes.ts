import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {TrainingComponent} from './features/studentregistration/training/training.component';
import {CountryComponent} from './features/countries/components/country/country.component';
import {VerkiezingenComponent} from './features/elections/verkiezingen.component';
import {CitiesComponent} from './features/cityoversight/components/cities/cities.component';
import {CityComponent} from './features/cityoversight/components/city/city.component';
import {TreinenComponent} from './features/trainplanner/components/treinen/treinen.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'countries',
    component: CountryComponent
  },
  {
    path: 'verkiezingen',
    component: VerkiezingenComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'editcity/:id',
    component: CityComponent
  },
  {
    path: 'editcity',
    component: CityComponent
  },
  {
    path: 'treinen',
    component: TreinenComponent
  }
];
