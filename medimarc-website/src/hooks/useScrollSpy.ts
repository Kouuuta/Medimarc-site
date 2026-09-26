import { useEffect, useState } from "react";
import { navLinks } from "../data/company";

/**
 * Reports which section is currently in view so the navbar can mark it.
 * Uses a top-biased root margin: the section under the fixed header, not the
 * one that happens to touch the middle of the viewport.
 */
export function useScrollSpy() {
  const [activeId, setActiveId] = useState<string>(navLinks[0]?.id ?? "");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size === 0) return;
        // Whichever tracked section occupies the most viewport wins. Falls
        // back to nav order so ties resolve deterministically.
        const best = navLinks
          .filter((link) => visible.has(link.id))
          .sort((a, b) => {
            const ratio = (visible.get(b.id) ?? 0) - (visible.get(a.id) ?? 0);
            if (ratio !== 0) return ratio;
            return (
              navLinks.findIndex((l) => l.id === a.id) -
              navLinks.findIndex((l) => l.id === b.id)
            );
          })[0];

        if (best) setActiveId(best.id);
      },
      {
        rootMargin: "-72px 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
