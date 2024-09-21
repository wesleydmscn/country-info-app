// @ts-ignore
import Flags from "country-code-emoji";
import Link from "next/link";

import { getAllAvailableCountries } from "@/api/get-all-available-countries";

export default async function Home() {
  const countries = await getAllAvailableCountries();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {countries.map((country) => {
        const countryFlag = Flags(country.countryCode);

        return (
          <Link
            key={country.countryCode}
            href={`/country/${country.countryCode}?countryName=${country.name}`}
            className="min-w-64 max-w-64 flex-1 rounded border border-zinc-200 bg-zinc-100 p-2 transition-colors hover:border-transparent hover:bg-zinc-900 hover:text-white"
            prefetch
          >
            <span className="truncate">
              {countryFlag} {country.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
