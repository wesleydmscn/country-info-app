export default function HomepageLoading() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="h-10 min-w-64 max-w-64 animate-pulse rounded border border-zinc-200 bg-zinc-100 p-2"
        />
      ))}
    </div>
  );
}
