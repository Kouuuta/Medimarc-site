import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { productCategories } from "../data/product";

export function Products() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = productCategories.filter(
    (c) => (filter === "all" || c.id === filter) && c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Our Products</h1>
            <p className="text-gray-500 text-sm mt-1">Browse our catalog of medical supplies</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-all"
            >
              <option value="all">All Categories</option>
              {productCategories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <div className="relative flex-1 sm:flex-initial">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full sm:w-52 pl-9 pr-3 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-all"
              />
            </div>
          </div>
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((cat) => (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:border-brand-200 hover:shadow-sm transition-all"
                onClick={() => navigate(`/products/${cat.id}`)}
              >
                <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
                  <img src={cat.image} alt={cat.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug">{cat.name}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-24">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
