import { createContext, useContext } from "react";
import type { QuoteItem } from "../types/catalog";

export const STORAGE_KEY = "medimarc.quote.v1";

export interface QuoteContextValue {
  items: QuoteItem[];
  isInQuote: (sku: string) => boolean;
  countInCategory: (categoryId: string) => number;
  toggleItem: (item: QuoteItem) => void;
  addItems: (items: QuoteItem[]) => void;
  removeItem: (sku: string) => void;
  clear: () => void;
}

export const QuoteContext = createContext<QuoteContextValue | null>(null);

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
}

export function readStoredQuote(): QuoteItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (entry): entry is QuoteItem =>
        typeof entry === "object" &&
        entry !== null &&
        typeof (entry as QuoteItem).sku === "string" &&
        typeof (entry as QuoteItem).categoryId === "string" &&
        typeof (entry as QuoteItem).categoryName === "string"
    );
  } catch {
    // Private browsing, disabled storage, or a corrupt payload. Start clean
    // rather than blocking a purchase inquiry on a quota error.
    return [];
  }
}
