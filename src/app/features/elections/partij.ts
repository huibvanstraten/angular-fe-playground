import {Expose} from 'class-transformer';

export class Partij {
  @Expose({ name: 'PartijID' })
  partijId: number = 0;
  @Expose({name: 'Naam' })
  partijNaam: string = "";
  VolledigeNaam: string = "";
  Zetels: number = 0;
  isSelected: boolean = false
}
