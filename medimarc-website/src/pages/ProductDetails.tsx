import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { productCategories } from "../data/product";

export function ProductDetails() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = productCategories.find((c) => c.id === categoryId);

  if (!category) {
    return <div className="min-h-screen flex items-center justify-center pt-20"><p className="text-gray-500">Category not found</p></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <button onClick={() => navigate("/products")} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to categories
        </button>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center">
            <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-xl mb-5">
              <img src={category.image} alt={category.name} className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
            <h2 className="text-base font-bold text-gray-900 text-center leading-snug">{category.name}</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h3 className="text-base font-semibold text-gray-900 mb-5">Products in this category</h3>
            <ul className="space-y-1.5">
              {category.products.map((p, i) => (
                <li key={i} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
