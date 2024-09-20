import { api } from '../configs/axios.config';
import { COUNTRY_INFO_API_URL, COUNTRY_LIST_API_URL } from '../configs/general.config';
import type {
  BorderCountry,
  Country,
  CountryFlag,
  PopulationCountry,
} from '../models/country.model';

export async function getAvailableCountries() {
  const response = await api(COUNTRY_LIST_API_URL).get<Country[]>('/AvailableCountries');
  const countries = response.data;

  return {
    countries,
  };
}

export async function getBorderCountriesFromCountryCode({
  countryCode,
}: {
  countryCode: string;
}) {
  const response = await api(COUNTRY_LIST_API_URL).get<BorderCountry>(
    `/CountryInfo/${countryCode}`,
  );

  const borderCountries = response.data;

  if (response.status === 404) {
    throw new Error('Not found border countries for this country');
  }

  return borderCountries;
}

export async function getPopulationCountry({ countryName }: { countryName: string }) {
  const response = await api(COUNTRY_INFO_API_URL).post<PopulationCountry>(
    '/countries/population',
    {
      country: countryName.toLowerCase(),
    },
  );

  const population = response.data;

  if (response.status === 404) {
    throw new Error('Not found population for this country');
  }

  return population;
}

export async function getCountryFlag({ countryName }: { countryName: string }) {
  const response = await api(COUNTRY_INFO_API_URL).post<CountryFlag>('/countries/flag/images', {
    country: countryName.toLowerCase(),
  });

  const flag = response.data;

  if (response.status === 404) {
    throw new Error('Not found flag for this country');
  }

  return flag.data;
}

export async function getCompleteCountryInfo({
  countryCode,
  countryName,
}: {
  countryCode: string;
  countryName: string;
}) {
  const countryPopulation = await getPopulationCountry({ countryName });
  const countryFlag = await getCountryFlag({ countryName });
  const borderCountries = await getBorderCountriesFromCountryCode({ countryCode });

  const isSameCountry = borderCountries.commonName.includes(countryPopulation.data.country);

  if (!isSameCountry) {
    throw new Error('countryCode and countryName must refer to the same country');
  }

  return {
    borderCountries,
    countryPopulation,
    countryFlag,
  };
}
