import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { categories } from "../data/products";
import { pageTransition, stagger, fadeUp } from "../lib/animations";
import { cn } from "../lib/cn";

export default function Products() {
  const [search, setSearch] = useState("");

  const filtered = categories.filter(
    (c) =>
      !search ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.products.some((p) => p.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <section className="bg-gray-50 pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Products"
            description="Browse our complete catalog of Nipro medical supplies and hospital essentials."
          />

          <div className="mx-auto mt-10 max-w-md">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={cn(
                  "w-full rounded-full border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm",
                  "placeholder:text-gray-400",
                  "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                  "transition-all duration-200"
                )}
              />
            </div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((cat) => (
              <motion.div key={cat.id} variants={fadeUp}>
                <Link
                  to={`/products/${cat.id}`}
                  className="group block"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm",
                      "transition-all duration-300 hover:shadow-md active:scale-[0.98]"
                    )}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-50 p-6">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <span className="inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand-700">
                        Nipro
                      </span>
                      <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-snug">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500 line-clamp-2">
                        {cat.description}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-600">
                        {cat.products.length} products
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="mt-20 text-center">
              <p className="text-gray-400">
                No categories found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
