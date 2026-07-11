import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link?: string;
}

interface Props {
  products: Product[];
}

export function ProductCarousel({ products }: Props) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  const go = (i: number) => {
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };

  const next = () => go((index + 1) % products.length);
  const prev = () => go((index - 1 + products.length) % products.length);

  return (
    <div>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ x: dir > 0 ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: dir > 0 ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ProductCard product={products[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-5">
        <button onClick={prev} className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-brand-600 hover:border-brand-300 transition-colors" aria-label="Previous">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index ? "w-6 h-2 bg-brand-600" : "w-2 h-2 bg-gray-300"
              }`}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-brand-600 hover:border-brand-300 transition-colors" aria-label="Next">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
