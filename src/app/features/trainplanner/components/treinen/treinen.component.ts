import { Component } from '@angular/core';
import {VertrektijdenComponent} from '../vertrektijden/vertrektijden.component';
import {Station} from '../../station';
import {StationmapComponent} from '../stationmap/stationmap.component';

@Component({
  selector: 'app-treinen',
  imports: [
    // StationslijstComponent,
    VertrektijdenComponent,
    StationmapComponent
  ],
  templateUrl: './treinen.component.html',
  styleUrl: './treinen.component.css'
})
export class TreinenComponent {
  currentStation: Station | null = null ;

  setCurrentStation(station: Station) { this.currentStation = station}
}
