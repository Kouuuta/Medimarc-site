import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import { Logo } from "./Logo";
import { useQuote } from "../contexts/quote";
import { navLinks } from "../data/company";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { scrollToSection, scrollToTop } from "../lib/scroll";
import { DURATION, EASE_OUT } from "../lib/motion";

export function Navbar() {
  const { items } = useQuote();
  const reduce = useReducedMotion();
  const activeId = useScrollSpy();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const menuRef = useFocusTrap<HTMLDivElement>(menuOpen, closeMenu);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    // Read once on mount so a reload that lands mid-page gets the solid
    // header immediately rather than a flash of the transparent one.
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const solid = scrolled || menuOpen;

  return (
    <>
      <a
        href="#main"
        className="no-print sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:inline-flex focus:h-11 focus:items-center focus:rounded-full focus:bg-ink focus:px-5 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`no-print fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-200 ease-out-quint ${
          solid
            ? "border-line bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-[72px] md:px-8"
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Medimarc Trading, back to top"
            className="-ml-1 shrink-0 rounded-md p-1 transition-transform duration-120 ease-out-quint active:scale-[0.97]"
          >
            <Logo />
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    aria-current={active ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-160 ease-out-quint ${
                      active ? "text-ink" : "text-muted hover-el:text-ink"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-cobalt"
                        transition={{ duration: DURATION.base, ease: EASE_OUT }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go("quote")}
              className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-cobalt pl-4 pr-4 text-sm font-semibold text-paper transition-[transform,background-color] duration-120 ease-out-quint hover-el:bg-cobalt-dark active:scale-[0.97]"
            >
              Request a quote
              <AnimatePresence initial={false}>
                {items.length > 0 && (
                  <motion.span
                    key={items.length}
                    initial={{ opacity: 0.4, transform: "scale(0.8)" }}
                    animate={{ opacity: 1, transform: "scale(1)" }}
                    exit={{ opacity: 0, transform: "scale(0.9)" }}
                    transition={{ duration: DURATION.micro, ease: EASE_OUT }}
                    className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-paper px-1.5 text-xs font-bold tabular-nums text-cobalt"
                    aria-label={`${items.length} items in quote`}
                  >
                    {items.length}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-transform duration-120 ease-out-quint active:scale-[0.95] md:hidden"
            >
              {menuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(-8px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              exit={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, transform: "translateY(-6px)", transition: { duration: 0.15 } }
              }
              transition={{ duration: DURATION.enter, ease: EASE_OUT }}
              className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden"
            >
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id} className="border-b border-line last:border-0">
                    <button
                      type="button"
                      onClick={() => go(link.id)}
                      className={`flex w-full items-center justify-between py-4 text-left font-display text-xl font-semibold transition-colors duration-160 ${
                        activeId === link.id ? "text-cobalt" : "text-ink"
                      }`}
                    >
                      {link.label}
                      {activeId === link.id && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden="true" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
