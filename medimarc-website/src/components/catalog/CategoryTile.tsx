import { ArrowRightIcon } from "lucide-react";
import type { Category } from "../../types/catalog";

interface CategoryTileProps {
  category: Category;
  matchedSkus: number;
  inQuote: number;
  onOpen: () => void;
}

export function CategoryTile({
  category,
  matchedSkus,
  inQuote,
  onOpen,
}: CategoryTileProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full w-full flex-col rounded-2xl text-left transition-transform duration-120 ease-out-quint active:scale-[0.98]"
    >
      <span className="relative block aspect-4/3 w-full overflow-hidden rounded-2xl border border-line bg-paper">
        {/*
          Product photography on white, not editorial imagery. object-cover
          crops the tips off the syringes; contain keeps the whole item and
          the padding keeps the frame from feeling empty.
        */}
        <span className="flex h-full w-full items-center justify-center p-5">
          <img
            src={category.image}
            alt=""
            loading="lazy"
            decoding="async"
            width={1200}
            height={896}
            className="max-h-full max-w-full rounded-xl object-contain transition-transform duration-300 ease-out-quint group-hover-el:scale-[1.05]"
          />
        </span>

        {inQuote > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-cobalt px-2.5 py-1 text-xs font-semibold tabular-nums text-paper">
            {inQuote} in quote
          </span>
        )}
      </span>

      <span className="mt-5 block text-[13px] font-medium text-muted">
        {category.brand}
      </span>
      <span className="mt-0.5 block font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-ink">
        {category.name}
      </span>
      <span className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-muted">
        {category.description}
      </span>

      <span className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
        <span className="text-muted">
          <span className="font-semibold tabular-nums text-ink">
            {category.skus.length}
          </span>{" "}
          {category.skus.length === 1 ? "size" : "sizes"}
          {matchedSkus > 0 && (
            <span className="ml-2 rounded-full bg-cobalt-soft px-2 py-0.5 text-xs font-semibold tabular-nums text-cobalt">
              {matchedSkus} match
            </span>
          )}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-cobalt">
          View sizes
          <ArrowRightIcon
            className="h-4 w-4 transition-transform duration-160 ease-out-quint group-hover-el:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </span>
    </button>
  );
}
