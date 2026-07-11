import { motion } from "framer-motion";
import { ProductCarousel } from "./ProductCarousel";
import { SectionTitle } from "../ui/SectionTitle";

const products = [
  { id: 1, name: "NIPRO Syringes", description: "Available in 2- or 3-part, with or without needle, fixed insulin needle, and three luer tip options.", image: "syringes-withneedles.png", link: "https://nipro.com.ph/product/540/" },
  { id: 2, name: "NIPRO Infusion Pump", description: "SmartFusion Series hawk-i1 — synchronizing ease-of-use, safety, and interoperability.", image: "infusion-pump.webp", link: "https://nipro.com.ph/product/infusion-pump/" },
  { id: 3, name: "NIPRO SafeTouch™ IV Catheter", description: "Ultra-sharp, three-beveled needle with passive safety mechanism.", image: "catheter.webp", link: "https://nipro.com.ph/product/safetouch-iv-catheter/" },
  { id: 4, name: "NIPRO Syringe Pump", description: "SmartFusion Series hawk-s1 — safe, simple, smart infusion delivery.", image: "syringe-pump.webp", link: "https://nipro.com.ph/product/syringe-pump/" },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Featured Products" subtitle="Discover our range of NIPRO medical products" />

        <motion.div
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 p-8 lg:p-10 xl:p-12 flex flex-col justify-center bg-gradient-to-br from-brand-50 to-white border-b lg:border-b-0 lg:border-r border-gray-200">
              <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-2">
                Overview
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Discover Our NIPRO Products
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Medimarc Trading provides high-quality, cost-effective hospital supplies as an authorized distributor of Nipro, Cardinal Health, and Terumo.
              </p>
              <div className="mt-6">
                <a
                  href="https://nipro.com.ph/products/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-brand-600 text-white font-semibold text-sm rounded-xl hover:bg-brand-700 transition-colors no-underline"
                >
                  View all products
                  <svg className="w-4 h-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-3/5 p-8 lg:p-10 bg-gray-50/50">
              <ProductCarousel products={products} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
