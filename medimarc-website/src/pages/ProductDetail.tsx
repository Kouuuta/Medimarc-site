import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Package } from "lucide-react";
import { categories } from "../data/products";
import { pageTransition, fadeUp, stagger } from "../lib/animations";
import { Button } from "../components/ui/Button";

export default function ProductDetail() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return (
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex min-h-screen items-center justify-center bg-gray-50 pt-20"
      >
        <div className="text-center">
          <p className="text-6xl font-bold text-gray-200">404</p>
          <h1 className="mt-2 text-xl font-semibold text-gray-900">
            Category not found
          </h1>
          <Button to="/products" variant="outline" className="mt-6">
            Back to Products
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="enter"
      exit="exit"
      className="bg-gray-50 pt-28 pb-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="group mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-brand-600"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Categories
        </Link>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-5"
        >
          <motion.div
            variants={fadeUp}
            className="md:col-span-2"
          >
            <div className="sticky top-28 flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex w-full items-center justify-center rounded-xl bg-gray-50 p-8">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-h-48 w-full object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Nipro
                </span>
                <h1 className="mt-3 text-lg font-bold text-gray-900 leading-snug">
                  {category.name}
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {category.description}
                </p>
              </div>
              <div className="mt-6 flex w-full gap-3">
                <Button size="sm" className="flex-1">
                  Request Quote
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="md:col-span-3"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-2.5">
                <Package className="h-5 w-5 text-brand-600" />
                <h2 className="text-base font-semibold text-gray-900">
                  Products in this category
                </h2>
              </div>

              <ul className="space-y-1">
                {category.products.map((product, i) => (
                  <motion.li
                    key={product}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.03,
                      duration: 0.3,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                  >
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                    <span className="text-sm leading-relaxed text-gray-600">
                      {product}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
