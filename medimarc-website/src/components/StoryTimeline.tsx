import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { milestones } from "../data/company";

const START = 2013;
const END = 2026;
const TICKS_PER_YEAR = 4;
const TOTAL_TICKS = (END - START) * TICKS_PER_YEAR;

function position(at: number) {
  return (at - START) / (END - START);
}

export function StoryTimeline() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "start 0.3"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const [reached, setReached] = useState(reduce ? milestones.length : 0);

  useMotionValueEvent(fill, "change", (value) => {
    if (reduce) return;
    setReached(
      milestones.filter((m) => value >= Math.max(position(m.at), 0.02)).length
    );
  });

  const milestoneYears = new Set(milestones.map((m) => Math.floor(m.at)));

  return (
    <section id="story" className="w-full scroll-mt-18 bg-canvas py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="font-display font-bold text-ink lg:col-span-6">
            Measured in years of hospital relationships.
          </h2>
          <p className="max-w-[48ch] text-lg leading-relaxed text-muted lg:col-span-5 lg:col-start-8 lg:pt-2">
            What began as one sales manager&apos;s reputation with hospital
            buyers has grown into an authorized Nipro distributorship serving
            Metro Manila and Southern Luzon.
          </p>
        </div>

        <div ref={trackRef} className="mt-20 px-2">
          <div
            className="relative h-24"
            role="img"
            aria-label={`Company timeline from ${START} to today`}
          >
            {/* Purely decorative density. 53 announced ticks would be noise
                in a screen reader. */}
            <div aria-hidden="true" className="absolute inset-0 hidden sm:block">
              {Array.from({ length: TOTAL_TICKS + 1 }).map((_, i) => {
                const major = i % TICKS_PER_YEAR === 0;
                return (
                  <span
                    key={i}
                    className={`absolute top-0 w-px bg-ink/30 ${
                      major ? "h-5" : "h-2.5"
                    }`}
                    style={{ left: `${(i / TOTAL_TICKS) * 100}%` }}
                  />
                );
              })}
            </div>

            <div className="absolute inset-x-0 top-8 h-4 overflow-hidden rounded-full border border-ink/15 bg-paper">
              <motion.div
                className="h-full w-full origin-left rounded-full bg-cobalt"
                style={{
                  transform: reduce ? "scaleX(1)" : undefined,
                  scaleX: reduce ? undefined : fill,
                }}
              />
            </div>

            {milestones.map((m) => (
              <span
                key={m.year}
                aria-hidden="true"
                className="absolute top-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-paper ring-4 ring-canvas transition-colors duration-200 ease-out-quint"
                style={{
                  left: `${position(m.at) * 100}%`,
                  borderColor: reached > 0 ? "var(--color-cobalt)" : "rgb(12 34 51 / 0.25)",
                }}
              />
            ))}

            <div aria-hidden="true" className="absolute inset-0 top-16">
              {Array.from({ length: END - START + 1 }).map((_, i) => {
                const year = START + i;
                const isEnd = year === END;
                const keep = milestoneYears.has(year) || isEnd;
                return (
                  <span
                    key={year}
                    className={`absolute -translate-x-1/2 whitespace-nowrap text-xs tabular-nums ${
                      keep ? "font-semibold text-ink" : "hidden text-muted lg:block"
                    }`}
                    style={{ left: `${(i / (END - START)) * 100}%` }}
                  >
                    {isEnd ? "Today" : year}
                  </span>
                );
              })}
            </div>
          </div>

          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
            {milestones.map((m, i) => (
              <li key={m.year}>
                <p
                  className={`font-display text-5xl font-bold tabular-nums tracking-[-0.03em] transition-colors duration-200 ease-out-quint md:text-6xl ${
                    i < reached ? "text-cobalt" : "text-ink/20"
                  }`}
                >
                  {m.year}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 max-w-[40ch] leading-relaxed text-muted">
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
