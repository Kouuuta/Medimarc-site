import { ArrowUpIcon } from "lucide-react";
import { Logo } from "./Logo";
import { contact, navLinks } from "../data/company";
import { scrollToSection, scrollToTop } from "../lib/scroll";

const socials = [
  { label: "Facebook", href: contact.facebook },
  { label: "Shopee", href: contact.shopee },
  { label: "TikTok", href: contact.tiktok },
];

export function Footer() {
  return (
    <footer className="no-print w-full border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-paper/60">
            Delivering essential healthcare supplies to hospitals and clinics
            across the Philippines since 2013.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="text-sm font-semibold">Explore</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-paper/60 transition-colors duration-160 ease-out-quint hover-el:text-paper"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="text-sm font-semibold">Shop and follow</h2>
          <ul className="mt-4 space-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-paper/60 transition-colors duration-160 ease-out-quint hover-el:text-paper"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold">Visit</h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-paper/60">
            {contact.addressLine1}
            <br />
            {contact.addressLine2}
          </address>
          <a
            href={contact.phoneHref}
            className="mt-3 inline-block text-sm text-paper/60 transition-colors duration-160 ease-out-quint hover-el:text-paper"
          >
            {contact.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-paper/10 px-5 py-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <div>
          <p>Â© {new Date().getFullYear()} Medimarc Trading. All rights reserved.</p>
          <p className="mt-1 max-w-[70ch]">
            Product names and trademarks belong to their respective owners.
          </p>
        </div>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-full border border-paper/20 px-4 text-xs font-semibold text-paper/80 transition-[transform,background-color] duration-120 ease-out-quint hover-el:bg-paper/10 active:scale-[0.97] sm:self-auto"
        >
          Back to top
          <ArrowUpIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
