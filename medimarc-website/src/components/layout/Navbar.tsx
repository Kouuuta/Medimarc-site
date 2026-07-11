import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/#about-us" },
  { label: "Contact", to: "/#contact-us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isHome = pathname === "/";

  const linkClass = (active: boolean) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all no-underline ${
      scrolled || !isHome
        ? active
          ? "text-brand-600 bg-brand-50"
          : "text-gray-600 hover:text-brand-600 hover:bg-gray-50"
        : active
          ? "text-white bg-white/15"
          : "text-white/80 hover:text-white hover:bg-white/10"
    }`;

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    if (to.startsWith("/#")) return false;
    return pathname.startsWith(to);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100 py-3"
          : isHome
            ? "bg-transparent py-5"
            : "bg-white shadow-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className={`text-xl font-bold tracking-tight no-underline transition-colors ${
            scrolled || !isHome ? "text-brand-600" : "text-white"
          }`}
        >
          MEDIMARC
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = isActive(l.to);
            if (l.to.startsWith("/#")) {
              return (
                <a key={l.label} href={l.to} className={linkClass(active)}>
                  {l.label}
                </a>
              );
            }
            return (
              <Link key={l.label} to={l.to} className={linkClass(active)}>
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isHome ? "text-gray-600" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden mx-3 mt-2 rounded-xl bg-white border border-gray-100 shadow-lg overflow-hidden"
          >
            {links.map((l) => {
              const base = "block px-4 py-3 text-sm font-medium no-underline text-gray-700 hover:bg-gray-50";
              if (l.to.startsWith("/#")) {
                return <a key={l.label} href={l.to} className={base}>{l.label}</a>;
              }
              return <Link key={l.label} to={l.to} className={base}>{l.label}</Link>;
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
