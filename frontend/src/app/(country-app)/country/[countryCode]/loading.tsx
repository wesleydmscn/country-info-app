export default function CountryPageLoading() {
  return (
    <div className="mx-auto max-w-[800px] animate-pulse space-y-6">
      <div className="flex flex-wrap gap-8">
        <div className="h-[250px] w-[360px] border border-zinc-200 bg-zinc-100" />

        <div className="flex flex-col space-y-2">
          <div className="h-8 w-[326px] rounded bg-zinc-100" />

          <div className="h-4 w-[280px] rounded bg-zinc-100" />
          <div className="h-4 w-[280px] rounded bg-zinc-100" />
          <div className="h-4 w-[280px] rounded bg-zinc-100" />
        </div>
      </div>

      <div className="h-6 w-[260px] rounded bg-zinc-100" />

      <div className="flex flex-wrap items-center gap-2 rounded border border-zinc-200 bg-white p-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-10 w-full min-w-28 max-w-64 flex-1 animate-pulse rounded border border-zinc-200 bg-zinc-100 p-2"
          />
        ))}
      </div>

      <div className="h-6 w-[260px] rounded bg-zinc-100" />

      <div className="h-[320px] w-full max-w-[800px] bg-zinc-100" />
    </div>
  );
}
