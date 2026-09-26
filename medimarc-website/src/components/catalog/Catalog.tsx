import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SearchIcon, ShoppingBagIcon, XIcon } from "lucide-react";
import { CategoryTile } from "./CategoryTile";
import { CategoryDrawer } from "./CategoryDrawer";
import { categories, totalSkuCount } from "../../data/catalog";
import { useQuote } from "../../contexts/quote";
import { scrollToSection } from "../../lib/scroll";
import { DURATION, EASE_OUT } from "../../lib/motion";
import type { Category } from "../../types/catalog";

export function Catalog() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Category | null>(null);
  const { items, countInCategory } = useQuote();

  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    return categories
      .map((category) => {
        const matchedSkus = q
          ? category.skus.filter((sku) => sku.toLowerCase().includes(q)).length
          : 0;
        const nameMatch =
          !q ||
          `${category.brand} ${category.name} ${category.description}`
            .toLowerCase()
            .includes(q);
        return { category, matchedSkus, visible: nameMatch || matchedSkus > 0 };
      })
      .filter((result) => result.visible);
  }, [q]);

  const close = useCallback(() => setOpen(null), []);

  return (
    <section
      id="catalog"
      className="w-full scroll-mt-18 bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display font-bold text-ink">Product catalog</h2>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
              Nipro hospital care products, supplied by the box. Open a line to
              see every size and add it to your quote.
            </p>
          </div>

          <div className="w-full lg:max-w-sm">
            <label htmlFor="catalog-search" className="sr-only">
              Search products
            </label>
            <div className="relative">
              <SearchIcon
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by product, size or gauge"
                autoComplete="off"
                className="h-12 w-full rounded-full border border-line bg-canvas pl-11 pr-11 text-[15px] text-ink transition-[border-color,background-color] duration-160 ease-out-quint placeholder:text-muted focus:border-cobalt focus:bg-paper focus:outline-none focus-visible:outline-2 focus-visible:outline-cobalt focus-visible:outline-offset-2 [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-1.5 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-muted transition-[background-color,transform] duration-120 ease-out-quint hover-el:bg-line hover-el:text-ink active:scale-[0.95]"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              )}
            </div>
            <p className="mt-3 pl-4 text-sm text-muted" aria-live="polite">
              {q
                ? `${results.length} ${results.length === 1 ? "line" : "lines"} match â€œ${query.trim()}â€`
                : `${categories.length} product lines, ${totalSkuCount} sizes`}
            </p>
          </div>
        </div>

        {/* Once something is selected, the buyer needs a persistent way back
            to the quote. The navbar CTA scrolls out of reach on mobile. */}
        <AnimatePresence>
          {items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, transform: "translateY(-6px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              exit={{ opacity: 0, transform: "translateY(-6px)" }}
              transition={{ duration: DURATION.base, ease: EASE_OUT }}
              className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cobalt-soft bg-cobalt-soft/50 px-5 py-3"
            >
              <p className="text-sm text-ink">
                <span className="font-semibold tabular-nums">
                  {items.length}
                </span>{" "}
                {items.length === 1 ? "size" : "sizes"} selected across{" "}
                <span className="font-semibold tabular-nums">
                  {new Set(items.map((item) => item.categoryId)).size}
                </span>{" "}
                product lines
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("quote")}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-cobalt px-4 text-sm font-semibold text-paper transition-[transform,background-color] duration-120 ease-out-quint hover-el:bg-cobalt-dark active:scale-[0.97]"
              >
                <ShoppingBagIcon className="h-4 w-4" aria-hidden="true" />
                Review quote
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {results.length > 0 ? (
          <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout" initial={false}>
              {results.map(({ category, matchedSkus }) => (
                <motion.li
                  key={category.id}
                  layout
                  initial={{ opacity: 0, transform: "scale(0.97)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{
                    opacity: 0,
                    transform: "scale(0.97)",
                    transition: { duration: 0.15 },
                  }}
                  transition={{ duration: DURATION.base, ease: EASE_OUT }}
                  className="flex"
                >
                  <CategoryTile
                    category={category}
                    matchedSkus={matchedSkus}
                    inQuote={countInCategory(category.id)}
                    onOpen={() => setOpen(category)}
                  />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        ) : (
          <div className="mt-14 rounded-2xl border border-dashed border-line px-6 py-16 text-center">
            <p className="font-display text-xl font-semibold text-ink">
              No products match â€œ{query.trim()}â€
            </p>
            <p className="mx-auto mt-2 max-w-[44ch] text-muted">
              Try a size like 5mL or a gauge like 23G. If you need something not
              listed, describe it in your quote request.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-6 inline-flex h-11 items-center rounded-full border border-ink/15 px-5 text-sm font-semibold text-ink transition-[transform,border-color] duration-120 ease-out-quint hover-el:border-ink/40 active:scale-[0.97]"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      <CategoryDrawer category={open} query={query} onClose={close} />
    </section>
  );
}
