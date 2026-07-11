import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Medimarc"
            className="h-9 w-auto"
          />
          <span
            className={cn(
              "text-lg font-bold tracking-tight transition-colors",
              scrolled ? "text-gray-900" : "text-white"
            )}
          >
            Medimarc
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                pathname === link.href
                  ? cn("text-brand-600", !scrolled && "text-white/90")
                  : cn(
                      "text-gray-600 hover:text-gray-900",
                      !scrolled && "text-white/70 hover:text-white"
                    )
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/products"
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 active:scale-[0.97]",
              scrolled
                ? "bg-brand-600 text-white hover:bg-brand-700"
                : "bg-white text-brand-700 hover:bg-white/90"
            )}
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className={cn(
                "block h-[2px] w-5 rounded-full transition-colors",
                scrolled ? "bg-gray-900" : "bg-white"
              )}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className={cn(
                "block h-[2px] w-5 rounded-full transition-colors",
                scrolled ? "bg-gray-900" : "bg-white"
              )}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className={cn(
                "block h-[2px] w-5 rounded-full transition-colors",
                scrolled ? "bg-gray-900" : "bg-white"
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-gray-100 bg-white md:hidden"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-brand-50 text-brand-700"
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/products"
                className="mt-3 block rounded-full bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
