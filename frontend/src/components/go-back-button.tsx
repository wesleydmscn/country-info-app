"use client";

import { usePathname, useRouter } from "next/navigation";

export function GoBackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <button onClick={() => router.back()} className="mr-auto">
      &#60;- Go Back
    </button>
  );
}
