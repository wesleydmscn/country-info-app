import { BadRequestError } from "@/definitions/error";
import { api } from "@/utilities/api";

export interface Country {
  countryCode: Uppercase<string>;
  name: string;
}

export async function getAllAvailableCountries(): Promise<Country[]> {
  try {
    const response = await api("/country/available", {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: ["countries"],
      },
    });

    const data = await response.json();

    return data.countries;
  } catch (error) {
    if (error instanceof BadRequestError) {
      throw new Error(error.message);
    }

    console.error(error);

    throw new Error("An unexpected error occurred, please reload the page!");
  }
}
