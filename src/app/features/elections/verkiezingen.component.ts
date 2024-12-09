import { Component } from '@angular/core';
import {Partij} from './partij';
import {HttpClient} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import { plainToInstance } from 'class-transformer';


@Component({
  selector: 'app-verkiezingen',
  imports: [NgForOf, NgIf],
  templateUrl: './verkiezingen.component.html',
  styleUrl: './verkiezingen.component.css'
})
export class VerkiezingenComponent {
  partijen: Partij[] = []

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<Partij[]>('https://xanderwemmers.nl/api/verkiezingen').subscribe(data => this.partijen = plainToInstance(Partij, data));
  }

  get totaalAantalZetels(): number {
    let sum = 0;
    for (let p of this.partijen) {sum += p.Zetels}

    return sum
  }

  get coalitie(): Partij[] {
    return this.partijen.filter(p => p.isSelected)
  }

  get totaalCoalitie(): number {
    let sum = 0;
    for (let p of this.coalitie) { sum += p.Zetels }

    return sum
  }

  get isMeerderheid(): boolean {
    return this.totaalCoalitie > this.totaalAantalZetels / 2;
  }
}
