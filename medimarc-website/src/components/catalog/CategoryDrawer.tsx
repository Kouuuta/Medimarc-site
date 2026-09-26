import { useCallback, useMemo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckIcon, ListChecksIcon, XIcon } from "lucide-react";
import { useQuote } from "../../contexts/quote";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { scrollToSection } from "../../lib/scroll";
import { DURATION, EASE_DRAWER, EASE_OUT } from "../../lib/motion";
import type { Category, QuoteItem } from "../../types/catalog";
import { Highlight } from "./Highlight";

interface CategoryDrawerProps {
  category: Category | null;
  query: string;
  onClose: () => void;
}

export function CategoryDrawer({ category, query, onClose }: CategoryDrawerProps) {
  const reduce = useReducedMotion();
  const { isInQuote, toggleItem, addItems, removeItem, items } = useQuote();
  const close = useCallback(() => onClose(), [onClose]);
  const panelRef = useFocusTrap<HTMLElement>(category !== null, close);

  const selectedHere = useMemo(
    () => (category ? category.skus.filter((sku) => isInQuote(sku)).length : 0),
    [category, isInQuote]
  );
  const allSelected =
    category !== null && selectedHere === category.skus.length;

  const quoteItems = useMemo<QuoteItem[]>(
    () =>
      category
        ? category.skus.map((sku) => ({
            sku,
            categoryId: category.id,
            categoryName: category.name,
          }))
        : [],
    [category]
  );

  const reviewQuote = () => {
    onClose();
    // Let the sheet finish sliding out before scrolling, otherwise the two
    // motions fight each other.
    window.setTimeout(() => scrollToSection("quote"), 220);
  };

  return (
    <AnimatePresence>
      {category && (
        <div
          className="no-print fixed inset-0 z-70"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          <motion.div
            className="absolute inset-0 bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: DURATION.enter, ease: EASE_OUT }}
            onClick={onClose}
          />

          <motion.aside
            ref={panelRef}
            className="absolute inset-y-0 right-0 flex w-full max-w-[500px] flex-col bg-paper shadow-sheet"
            initial={reduce ? { opacity: 0 } : { transform: "translateX(100%)" }}
            animate={reduce ? { opacity: 1 } : { transform: "translateX(0%)" }}
            exit={
              reduce
                ? { opacity: 0, transition: { duration: 0.15 } }
                : {
                    transform: "translateX(100%)",
                    transition: { duration: 0.2, ease: EASE_OUT },
                  }
            }
            transition={{ duration: DURATION.enter, ease: EASE_DRAWER }}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-3">
              <span className="text-sm font-medium text-muted">
                {category.brand} product line
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close product sizes"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-[transform,background-color] duration-120 ease-out-quint hover-el:bg-canvas active:scale-[0.95]"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="px-6 pt-6">
                <div className="aspect-16/10 overflow-hidden rounded-2xl border border-line bg-paper">
                  <span className="flex h-full w-full items-center justify-center p-4">
                    <img
                      src={category.image}
                      alt={`${category.brand} ${category.name}`}
                      decoding="async"
                      className="max-h-full max-w-full object-contain"
                    />
                  </span>
                </div>
                <h2
                  id="drawer-title"
                  className="mt-6 font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-ink"
                >
                  {category.name}
                </h2>
                <p className="mt-2 leading-relaxed text-muted">
                  {category.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-3 px-6">
                <h3 className="text-sm font-semibold text-ink">
                  {category.skus.length}{" "}
                  {category.skus.length === 1 ? "size" : "sizes and variants"}
                </h3>
                {allSelected ? (
                  <button
                    type="button"
                    onClick={() => quoteItems.forEach((item) => removeItem(item.sku))}
                    className="text-sm font-semibold text-muted transition-colors duration-160 ease-out-quint hover-el:text-ink"
                  >
                    Clear all
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => addItems(quoteItems)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt transition-colors duration-160 ease-out-quint hover-el:text-cobalt-dark"
                  >
                    <ListChecksIcon className="h-4 w-4" aria-hidden="true" />
                    Add all
                  </button>
                )}
              </div>

              <ul className="mt-3 border-t border-line">
                {category.skus.map((sku) => {
                  const checked = isInQuote(sku);
                  return (
                    <li key={sku} className="border-b border-line">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={checked}
                        onClick={() =>
                          toggleItem({
                            sku,
                            categoryId: category.id,
                            categoryName: category.name,
                          })
                        }
                        className={`flex w-full items-center gap-4 px-6 py-3.5 text-left transition-colors duration-160 ease-out-quint ${
                          checked ? "bg-cobalt-soft/60" : "hover-el:bg-canvas"
                        }`}
                      >
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-160 ease-out-quint ${
                            checked
                              ? "border-cobalt bg-cobalt text-paper"
                              : "border-ink/25 bg-paper"
                          }`}
                        >
                          <AnimatePresence initial={false}>
                            {checked && (
                              <motion.span
                                initial={{ opacity: 0, transform: "scale(0.6)" }}
                                animate={{ opacity: 1, transform: "scale(1)" }}
                                exit={{
                                  opacity: 0,
                                  transform: "scale(0.6)",
                                  transition: { duration: 0.1 },
                                }}
                                transition={{
                                  duration: DURATION.micro,
                                  ease: EASE_OUT,
                                }}
                              >
                                <CheckIcon
                                  className="h-3.5 w-3.5"
                                  strokeWidth={3}
                                />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </span>
                        <span className="text-[15px] text-ink">
                          <Highlight text={sku} query={query} />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-line bg-paper px-6 py-4">
              <p className="text-sm text-muted">
                <span className="font-semibold tabular-nums text-ink">
                  {items.length}
                </span>{" "}
                {items.length === 1 ? "item" : "items"} in your quote
              </p>
              <button
                type="button"
                onClick={reviewQuote}
                disabled={items.length === 0}
                className="inline-flex h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-cobalt px-5 text-sm font-semibold text-paper transition-[transform,background-color,opacity] duration-120 ease-out-quint hover-el:bg-cobalt-dark active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:active:scale-100"
              >
                Review quote
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
