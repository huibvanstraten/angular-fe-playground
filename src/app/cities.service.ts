import { Injectable } from '@angular/core';
import {City} from './city';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CitiesService {
  url: string = 'https://xanderwemmers.nl/api/cities/';

  constructor(private httpClient: HttpClient) { }

  getCities(): Observable<City[]> { return this.httpClient.get<City[]>(this.url) }
  getCity(id: number): Observable<City> { return this.httpClient.get<City>(this.url + id) }
  createCity(city: City) { return this.httpClient.post(this.url, city) }
  updateCity(city: City) { return this.httpClient.put(this.url + city.CityID, city) }
  deleteCity(id: number) { return this.httpClient.delete(this.url + id)}
}
