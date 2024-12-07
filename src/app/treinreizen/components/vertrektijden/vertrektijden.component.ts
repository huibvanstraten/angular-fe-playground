import {Component, Input} from '@angular/core';
import {Station} from '../../station';
import {NgForOf, NgIf} from '@angular/common';
import {VertrektijdInfo} from '../../vertrektijd-info';
import {NsApiService} from '../../ns-api.service';
import {TimePipe} from '../../../time.pipe';

@Component({
  selector: 'app-vertrektijden',
  imports: [NgIf, NgForOf, TimePipe],
  templateUrl: './vertrektijden.component.html',
  styleUrl: './vertrektijden.component.css'
})
export class VertrektijdenComponent {
  tijden: VertrektijdInfo[] | null = null;

  @Input()
  station: Station | null = null;

  constructor(private nsApiService: NsApiService) {
  }

  ngOnChanges() {
    if (this.station) {
      this.nsApiService.getTijden(this.station.Code).subscribe(data => this.tijden = data);
    }
  }
}
