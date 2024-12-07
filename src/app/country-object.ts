export interface CountryObject {
  name: {
    common: string,
    official: string
  }
  region: string;
  subregion: string;
  population: number;
  area: number;
  flags: {
    png: string,
    svg: string
  }
}
