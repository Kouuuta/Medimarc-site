import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PhoneIcon, ShieldCheckIcon, ArrowDownIcon } from "lucide-react";
import { contact, images } from "../data/company";
import { scrollToSection } from "../lib/scroll";
import { DURATION, EASE_OUT } from "../lib/motion";

const HEADLINE = "Hospital supplies your wards can count on.";

export function Hero() {
  const reduce = useReducedMotion();
  const words = HEADLINE.split(" ");

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, transform: "translateY(10px)" },
          animate: { opacity: 1, transform: "translateY(0px)" },
          transition: { duration: DURATION.enter, delay, ease: EASE_OUT },
        };

  return (
    <section className="relative w-full bg-canvas pb-16 pt-28 md:pb-24 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h1 className="max-w-[13ch] font-bold text-ink">
            {/* The visual word-by-word reveal below is decorative, so the
                full sentence is exposed once for assistive tech. */}
            <span className="sr-only">{HEADLINE}</span>
            <span aria-hidden="true">
              {words.map((word, i) => (
                <Fragment key={`${word}-${i}`}>
                  <span className="-mb-[0.1em] inline-block overflow-hidden pb-[0.1em] align-top">
                    <motion.span
                      className="inline-block"
                      initial={reduce ? false : { transform: "translateY(105%)" }}
                      animate={{ transform: "translateY(0%)" }}
                      transition={{
                        duration: DURATION.enter,
                        delay: 0.06 + i * 0.045,
                        ease: EASE_OUT,
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                  {i < words.length - 1 && " "}
                </Fragment>
              ))}
            </span>
          </h1>

          <motion.p
            {...fadeUp(0.36)}
            className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted"
          >
            Medimarc Trading is an authorized Nipro distributor supplying
            syringes, needles, IV catheters and infusion systems to hospitals
            and clinics across Metro Manila and Southern Luzon.
          </motion.p>

          <motion.div
            {...fadeUp(0.42)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => scrollToSection("catalog")}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-semibold text-paper transition-[transform,background-color] duration-120 ease-out-quint hover-el:bg-cobalt active:scale-[0.97]"
            >
              Browse the catalog
              <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={contact.phoneHref}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 px-5 text-[15px] font-semibold text-ink transition-[transform,border-color] duration-120 ease-out-quint hover-el:border-ink/40 active:scale-[0.97]"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              {contact.phone}
            </a>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, transform: "scale(0.97)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: DURATION.enter, delay: 0.15, ease: EASE_OUT }}
            className="relative aspect-4/5 overflow-hidden rounded-[28px] bg-canvas"
          >
            <img
              src={images.hero}
              alt="Nipro syringes in five sizes, from 1mL to 10mL"
              width={928}
              height={1152}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.5)}
            className="absolute -bottom-6 left-4 right-4 flex items-start gap-3 rounded-2xl border border-line bg-paper p-4 shadow-lift sm:left-auto sm:right-6 sm:max-w-[300px] lg:-left-10 lg:right-auto"
          >
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cobalt-soft text-cobalt">
              <ShieldCheckIcon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">
                Authorized Nipro distributor
              </span>
              <span className="mt-0.5 block text-[13px] leading-snug text-muted">
                Metro Manila hospital care, exclusive for Southern Luzon and
                Bambang
              </span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
