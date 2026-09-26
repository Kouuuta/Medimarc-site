import { motion, useReducedMotion } from "framer-motion";
import { MapPinIcon, TargetIcon, EyeIcon } from "lucide-react";
import { brands, contact, images, mission, vision } from "../data/company";
import { revealUp, stagger } from "../lib/motion";

const principles = [
  { icon: TargetIcon, title: "Our mission", body: mission },
  { icon: EyeIcon, title: "Our vision", body: vision },
];

export function About() {
  const reduce = useReducedMotion();

  const container = reduce
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <section id="about" className="w-full scroll-mt-18 bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <motion.div
            {...container}
            variants={{
              hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
              visible: {
                opacity: 1,
                clipPath: "inset(0 0 0% 0)",
                transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] },
              },
            }}
            className="aspect-4/5 overflow-hidden rounded-[28px] bg-canvas lg:sticky lg:top-24"
          >
            <img
              src={images.stockroom}
              alt="Shelves of boxed hospital consumables in a stockroom"
              loading="lazy"
              decoding="async"
              width={1264}
              height={848}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="sr-only">About Medimarc Trading</h2>
          <p className="font-display text-3xl font-medium leading-[1.2] tracking-[-0.02em] text-ink md:text-[2.5rem]">
            From our office in Quezon City, Medimarc Trading has supplied a wide
            range of quality, cost-effective hospital supplies since 2013.
          </p>

          <div className="mt-14">
            <h3 className="text-sm text-muted">Brands we distribute</h3>
            <ul className="mt-4 grid border-y border-line sm:grid-cols-3">
              {brands.map((brand) => (
                <li
                  key={brand.name}
                  className="border-b border-line py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                >
                  <p className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                    {brand.name}
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      brand.name === "Nipro" ? "font-semibold text-cobalt" : "text-muted"
                    }`}
                  >
                    {brand.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            {...container}
            variants={stagger(0.08)}
            className="mt-14 grid gap-10 md:grid-cols-2"
          >
            {principles.map(({ icon: Icon, title, body }) => (
              <motion.div key={title} variants={revealUp}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cobalt-soft text-cobalt">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{body}</p>
              </motion.div>
            ))}
          </motion.div>

          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-12 flex items-start gap-3 rounded-2xl border border-line bg-canvas p-5 transition-[transform,border-color] duration-120 ease-out-quint hover-el:border-cobalt/40 active:scale-[0.99]"
          >
            <MapPinIcon
              className="mt-0.5 h-5 w-5 shrink-0 text-cobalt"
              aria-hidden="true"
            />
            <span>
              <span className="block text-sm font-semibold text-ink">
                Business office
              </span>
              <address className="mt-1 text-sm not-italic leading-relaxed text-muted">
                {contact.addressLine1}
                <br />
                {contact.addressLine2}
              </address>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
