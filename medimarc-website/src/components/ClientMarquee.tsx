import { clients } from "../data/company";
import type { Client } from "../types/catalog";

/**
 * Trust strip of the hospitals we supply.
 *
 * The original hotlinked favicons from Google's favicon service. That is a
 * third-party request on every page load, leaks visitor IPs, and degrades to
 * a broken image whenever it is blocked. These monograms are deterministic,
 * weightless, and always render.
 */
export function ClientMarquee() {
  // Duplicated so the -50% translate loops seamlessly.
  const loop = [...clients, ...clients];

  return (
    <section
      aria-label="Hospitals we supply"
      className="w-full border-y border-line bg-canvas"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:gap-10 md:px-8">
        <p className="shrink-0 text-sm text-muted">Supplying purchasing teams at</p>

        <div className="marquee relative min-w-0 flex-1 overflow-hidden marquee-fade">
          {/* The visible track is decorative; this is the accessible list. */}
          <ul className="sr-only">
            {clients.map((client) => (
              <li key={client.name}>{client.name}</li>
            ))}
          </ul>

          <div className="marquee-track flex w-max items-center" aria-hidden="true">
            {loop.map((client, i) => (
              <span key={`${client.name}-${i}`} className="mr-12 flex items-center gap-3">
                <Monogram client={client} />
                <span className="whitespace-nowrap font-display text-lg font-semibold tracking-tight text-ink/80">
                  {client.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Monogram({ client }: { client: Client }) {
  // Fixed hue per client so the strip reads as a set of distinct marks
  // rather than eight identical blue squares.
  const hue = hashHue(client.short);

  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-paper font-display text-[11px] font-bold tracking-tight"
      style={{ color: `oklch(0.42 0.14 ${hue})` }}
    >
      {client.short}
    </span>
  );
}

function hashHue(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) % 360;
  }
  // Keep the range inside the blues and teals so the strip stays calm.
  return 200 + (hash % 60);
}
