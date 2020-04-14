interface Language {
  name: string;
  nativeName: string;
}

interface Country {
  name: string;
  area: number | undefined; // [km^2]
  population: number;
  region: string;
  languages: Language[];
}
