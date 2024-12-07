import { NgModule } from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {TreinenComponent} from './components/treinen/treinen.component';
import {StationslijstComponent} from './components/stationslijst/stationslijst.component';
import {VertrektijdenComponent} from './components/vertrektijden/vertrektijden.component';


@NgModule({
  declarations: [StationslijstComponent, TreinenComponent, VertrektijdenComponent],
  imports: [CommonModule, NgModule, NgIf, NgForOf],
  exports:[StationslijstComponent, TreinenComponent, VertrektijdenComponent]
})
export class TreinreizenModule { }
