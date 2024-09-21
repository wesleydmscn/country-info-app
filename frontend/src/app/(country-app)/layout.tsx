import Link from "next/link";
import type { PropsWithChildren } from "react";

import { GoBackButton } from "@/components/go-back-button";

export default function CountryLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen space-y-6">
      <header>
        <div className="flex items-center justify-center p-6">
          <GoBackButton />
          <Link href="/">
            <h1 className="text-xl font-medium md:text-2xl">
              Country Info App
            </h1>
          </Link>
        </div>

        <hr className="w-full border-zinc-200" />
      </header>

      <div className="mx-4">{children}</div>

      <footer className="py-8 text-center">
        <a href="https://github.com/wesleydmscn" target="_blank">
          Created by wesleydmscn 🤘
        </a>
      </footer>
    </main>
  );
}
