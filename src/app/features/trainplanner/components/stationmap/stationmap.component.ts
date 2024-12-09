import {Component, EventEmitter, Output} from '@angular/core';
import L from 'leaflet';
import {Station} from '../../station';
import {NsApiService} from '../../ns-api.service';

@Component({
  selector: 'app-stationmap',
  imports: [],
  templateUrl: './stationmap.component.html',
  styleUrl: './stationmap.component.css'
})
export class StationmapComponent {
  map!: L.Map;
  stations: Station[] = []

  @Output()
  stationSelected = new EventEmitter<Station>();

  constructor(private nsApiService: NsApiService) {}

  ngOnInit() {
    this.nsApiService.getStations().subscribe(data => {
      data.forEach(s => L.circle([s.Lat, s.Long], { radius: 500 }).addTo(this.map).on('click', () => this.stationSelected.emit(s)))
    });
  }

  ngAfterViewInit() {
    this.initializeMap();
    window.dispatchEvent(new Event("resize"));
  }

  initializeMap() {
    this.map = L.map('map', {
      center: [ 52.092876, 5.104480 ],
      zoom: 7
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
