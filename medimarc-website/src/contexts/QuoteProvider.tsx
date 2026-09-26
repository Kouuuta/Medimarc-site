import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { QuoteContext, STORAGE_KEY, readStoredQuote } from "./quote";
import type { QuoteItem } from "../types/catalog";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>(readStoredQuote);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Quota exceeded or storage unavailable. The in-memory quote still works.
    }
  }, [items]);

  const isInQuote = useCallback(
    (sku: string) => items.some((item) => item.sku === sku),
    [items]
  );

  const countInCategory = useCallback(
    (categoryId: string) =>
      items.filter((item) => item.categoryId === categoryId).length,
    [items]
  );

  const toggleItem = useCallback((item: QuoteItem) => {
    setItems((prev) =>
      prev.some((i) => i.sku === item.sku)
        ? prev.filter((i) => i.sku !== item.sku)
        : [...prev, item]
    );
  }, []);

  const addItems = useCallback((next: QuoteItem[]) => {
    setItems((prev) => [
      ...prev,
      ...next.filter((n) => !prev.some((p) => p.sku === n.sku)),
    ]);
  }, []);

  const removeItem = useCallback((sku: string) => {
    setItems((prev) => prev.filter((item) => item.sku !== sku));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      isInQuote,
      countInCategory,
      toggleItem,
      addItems,
      removeItem,
      clear,
    }),
    [items, isInQuote, countInCategory, toggleItem, addItems, removeItem, clear]
  );

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
}
