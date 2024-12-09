import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Station} from './station';
import {VertrektijdInfo} from './vertrektijd-info';

@Injectable({
  providedIn: 'root'
})
export class NsApiService {
  url: string = 'https://xanderwemmers.nl/api/ns/'

  constructor(private httpClient: HttpClient) { }

  getStations() {
    return this.httpClient.get<Station[]>(this.url)
  }

  getTijden(code: string) {
    return this.httpClient.get<VertrektijdInfo[]>(this.url + code)
  }
}
