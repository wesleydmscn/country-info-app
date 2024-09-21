import { BadRequestError } from "@/definitions/error";
import { api } from "@/utilities/api";

type BorderCountry = {
  commonName: string;
  officialName: string;
  countryCode: Uppercase<string>;
  region: string;
  borders: BorderCountry[] | null;
};

type GetSpecificCountryInfoResponse = {
  borderCountries: BorderCountry;
  countryPopulation: {
    data: {
      country: string;
      code: string;
      iso3: string;
      populationCounts: {
        year: number;
        value: number;
      }[];
    };
  } | null;
  countryFlag: {
    data: {
      name: string;
      flag: string | null;
      iso2: string;
      iso3: string;
    };
  } | null;
};

type GetSpecificCountryInfoProps = {
  countryCode: string;
  countryName: string;
};

export async function getSpecificCountryInfo({
  countryCode,
  countryName,
}: GetSpecificCountryInfoProps): Promise<GetSpecificCountryInfoResponse> {
  try {
    const response = await api("/country/specific/info", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ countryCode, countryName }),
      cache: "force-cache",
      next: {
        tags: ["specific-country"],
      },
    });

    const countryInfo = await response.json();

    return countryInfo;
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error(error.message);
    }

    console.error(error);

    throw new Error("An unexpected error occurred, please reload the page!");
  }
}
