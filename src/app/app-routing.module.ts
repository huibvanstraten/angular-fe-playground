import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TrainingComponent} from './training/training.component';
import {CountryComponent} from './country/country.component';
import {VerkiezingenComponent} from './verkiezingen/verkiezingen.component';
import {CitiesComponent} from './cities/cities.component';
import {CityComponent} from './city/city.component';
import {TreinenComponent} from './treinreizen/components/treinen/treinen.component';
import {NgModule} from '@angular/core';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
