import { Component } from '@angular/core';
import {CitiesService} from '../cities.service';
import {City} from '../city';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cities',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  cities: City[] = []


  constructor(private cityService: CitiesService) {}

  ngOnInit() {
    this.cityService.getCities().subscribe(data => this.cities = data)
  }
}
