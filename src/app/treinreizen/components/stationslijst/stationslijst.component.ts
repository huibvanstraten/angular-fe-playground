import {Component, EventEmitter, Output} from '@angular/core';
import {Station} from '../../station';
import {NsApiService} from '../../ns-api.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-stationslijst',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './stationslijst.component.html',
  styleUrl: './stationslijst.component.css'
})
export class StationslijstComponent {
  stations: Station[] = []

  @Output()
  stationSelected = new EventEmitter<Station>();

  constructor(private nsApiService: NsApiService) {}

  ngOnInit() {
    this.nsApiService.getStations().subscribe(data => {
      this.stations = data.sort((a, b) => a.Name.localeCompare(b.Name));
    });
  }

  stationOnClick(station: Station) {
    this.stationSelected.emit(station);
  }
}
