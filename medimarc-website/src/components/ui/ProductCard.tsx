import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import type { Category } from "../../data/products";

interface ProductCardProps {
  category: Category;
}

export function ProductCard({ category }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 150, damping: 20 });

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    x.set(mouseX / 20);
    y.set(-mouseY / 20);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
      className="group relative"
    >
      <Link to={`/products/${category.id}`}>
        <motion.div
          style={{ rotateX, rotateY }}
          className="relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md active:scale-[0.98]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 p-6">
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="p-4">
            <span className="inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand-700">
              Nipro
            </span>
            <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-snug">
              {category.name}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-gray-500 line-clamp-2">
              {category.description}
            </p>
            <span className="mt-2 inline-block text-xs font-medium text-brand-600">
              {category.products.length} products
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
