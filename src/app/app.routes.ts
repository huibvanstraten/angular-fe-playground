import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'training',
    loadComponent: () => import('./features/studentregistration/training/training.component').then(m => m.TrainingComponent)
  },
  {
    path: 'countries',
    loadComponent: () => import('./features/countries/components/country/country.component').then(m => m.CountryComponent)
  },
  {
    path: 'verkiezingen',
    loadComponent: () => import('./features/elections/verkiezingen.component').then(m => m.VerkiezingenComponent)
  },
  {
    path: 'cities',
    loadComponent: () => import('./features/cityoversight/components/cities/cities.component').then(m => m.CitiesComponent)
  },
  {
    path: 'editcity/:id',
    loadComponent: () => import('./features/cityoversight/components/city/city.component').then(m => m.CityComponent)
  },
  {
    path: 'editcity',
    loadComponent: () => import('./features/cityoversight/components/city/city.component').then(m => m.CityComponent)
  },
  {
    path: 'treinen',
    loadComponent: () => import('./features/trainplanner/components/treinen/treinen.component').then(m => m.TreinenComponent)
  },
  {
    path: 'user',
    loadComponent: () => import('./features/musicreleasemonitor/components/gradient-bg/gradient-bg.component').then(m => m.GradientBgComponent)
  }
];
