import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link?: string;
}

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-44 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-1.5 leading-snug">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{product.description}</p>
        {product.link && (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors no-underline"
          >
            View product
            <svg className="w-3.5 h-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}
