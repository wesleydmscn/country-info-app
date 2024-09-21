// @ts-ignore
import Flags from "country-code-emoji";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getSpecificCountryInfo } from "@/api/get-specific-country-info";
import { PopulationBarChart } from "@/components/bar-chart";

type CountryPageProps = {
  params: {
    countryCode?: string;
  };
  searchParams: {
    countryName?: string;
  };
};

export default async function CountryPage({
  params,
  searchParams,
}: CountryPageProps) {
  const { countryCode } = params;
  const { countryName } = searchParams;

  if (!countryCode || !countryName) {
    redirect("/");
  }

  const { borderCountries, countryPopulation, countryFlag } =
    await getSpecificCountryInfo({
      countryCode,
      countryName,
    });

  const countryBorderCountries = borderCountries;
  const countryFlagPath = countryFlag?.data.flag || "/no-image.png";

  return (
    <div className="mx-auto max-w-[800px] space-y-6">
      <div className="flex flex-wrap gap-8">
        <Image
          className="border border-zinc-400"
          src={countryFlagPath}
          alt=""
          width={360}
          height={360}
          priority
        />

        <div className="flex flex-col">
          <h2 className="text-2xl font-medium">
            {countryBorderCountries.officialName}
          </h2>

          <span>Common name: {countryBorderCountries.commonName}</span>
          <span>Region: {countryBorderCountries.region}</span>
          <span>Country Code: {countryBorderCountries.countryCode}</span>
        </div>
      </div>

      {countryBorderCountries.borders &&
        countryBorderCountries.borders.length > 0 && (
          <>
            <span className="block font-medium">Border countries:</span>

            <div className="flex flex-wrap items-center gap-2 rounded border border-zinc-200 bg-white p-2">
              {countryBorderCountries.borders.map((country) => {
                const countryFlag = Flags(country.countryCode);

                return (
                  <Link
                    key={country.countryCode}
                    href={`/country/${country.countryCode}?countryName=${country.commonName}`}
                    className="max-w-64 flex-1 rounded border border-zinc-200 bg-zinc-100 p-2 transition-colors hover:border-transparent hover:bg-zinc-900 hover:text-white"
                    prefetch
                  >
                    <span className="truncate">
                      {countryFlag} {country.commonName}
                    </span>
                  </Link>
                );
              })}
            </div>
          </>
        )}

      {countryPopulation?.data && (
        <>
          <span className="block font-medium">Population:</span>

          <div suppressHydrationWarning={false}>
            <PopulationBarChart
              dataset={countryPopulation.data.populationCounts}
            />
          </div>
        </>
      )}
    </div>
  );
}
