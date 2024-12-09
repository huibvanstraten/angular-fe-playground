import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CountryObject} from '../../country-object';

@Component({
  selector: 'app-country',
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  countries: CountryObject[] = [];
  searchText: string = '';
  sortAscending: boolean = false;
  get filteredCountries(): CountryObject[] { return this.countries.filter(country => country.name.common.includes(this.searchText)); }


  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<CountryObject[]>('https://restcountries.com/v3.1/all').subscribe(data => this.countries = data);
  }

  sortByName() {
    this.sortAscending = !this.sortAscending;
    if (this.sortAscending) this.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    else this.countries.sort((a, b) => b.name.common.localeCompare(a.name.common));
  }
}
