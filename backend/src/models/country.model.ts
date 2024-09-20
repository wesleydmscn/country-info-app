export interface Country {
  countryCode: Uppercase<string>;
  name: string;
}

export interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: Uppercase<string>;
  region: string;
  borders: BorderCountry[] | null;
}

export interface PopulationCountry {
  data: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: {
      year: number;
      value: number;
    }[];
  };
}

export interface CountryFlag {
  data: {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  };
}
