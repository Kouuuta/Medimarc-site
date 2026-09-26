import { motion, useReducedMotion } from "framer-motion";
import { useQuote } from "../../contexts/quote";
import { scrollToSection } from "../../lib/scroll";
import { DURATION, EASE_OUT } from "../../lib/motion";

/**
 * Sticky mobile action bar.
 *
 * The quote CTA lives in the fixed navbar, which is off-screen for most of a
 * long scroll. Without this, a buyer who has just added twelve sizes has to
 * scroll back to the top to find the button that uses them.
 */
export function QuoteTray() {
  const { items } = useQuote();
  const reduce = useReducedMotion();

  return (
    <>
      {/* Sits above the tray, which is fixed to the bottom of the viewport. */}
      <div
        aria-hidden="true"
        className={`no-print pointer-events-none fixed inset-x-0 bottom-0 z-40 h-20 transition-opacity duration-200 ${
          items.length > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-full bg-gradient-to-t from-canvas via-canvas/90 to-transparent" />
      </div>

      <motion.div
        initial={false}
        animate={{
          transform: items.length > 0 ? "translateY(0px)" : "translateY(120%)",
          opacity: items.length > 0 ? 1 : 0,
        }}
        transition={
          reduce
            ? { duration: 0.01 }
            : { duration: DURATION.base, ease: EASE_OUT }
        }
        className="no-print fixed inset-x-0 bottom-0 z-50 p-3 sm:hidden"
      >
        <div className="flex items-center gap-3 rounded-full border border-line bg-paper/95 p-1.5 pl-5 shadow-lift backdrop-blur-md">
          <p className="min-w-0 flex-1 truncate text-sm text-muted">
            <span className="font-semibold tabular-nums text-ink">
              {items.length}
            </span>{" "}
            {items.length === 1 ? "size" : "sizes"} selected
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("quote")}
            className="inline-flex h-11 shrink-0 items-center rounded-full bg-cobalt px-5 text-sm font-semibold text-paper transition-[transform,background-color] duration-120 ease-out-quint active:scale-[0.97]"
          >
            Review quote
          </button>
        </div>
      </motion.div>
    </>
  );
}
