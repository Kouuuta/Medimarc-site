import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUp } from "../../lib/animations";

const featured = [
  {
    name: "NIPRO Syringes",
    description:
      "Available in 2- or 3-part, with or without needle, fixed insulin needle, and three luer tip options.",
    image: "/images/syringes-withneedles.png",
    link: "https://nipro.com.ph/product/540/",
  },
  {
    name: "NIPRO Infusion Pump",
    description:
      "SmartFusion Series hawk-i1 — synchronizing ease-of-use, safety, and interoperability.",
    image: "/images/infusion-pump.webp",
    link: "https://nipro.com.ph/product/infusion-pump/",
  },
  {
    name: "NIPRO SafeTouch™ IV Catheter",
    description:
      "Ultra-sharp, three-beveled needle with passive safety mechanism.",
    image: "/images/catheter.webp",
    link: "https://nipro.com.ph/product/safetouch-iv-catheter/",
  },
  {
    name: "NIPRO Syringe Pump",
    description:
      "SmartFusion Series hawk-s1 — safe, simple, smart infusion delivery.",
    image: "/images/syringe-pump.webp",
    link: "https://nipro.com.ph/product/syringe-pump/",
  },
];

export function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Featured Products"
          title="Discover our range of NIPRO medical products"
          description="Medimarc Trading provides high-quality, cost-effective hospital supplies as an authorized distributor of Nipro, Cardinal Health, and Terumo."
        />

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {featured.map((product, i) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
            >
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-[0.98]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="inline-block rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand-700">
                      Nipro
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-gray-900 leading-snug">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {product.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-brand-600">
                    View on Nipro
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.32 }}
          >
            <a
              href="https://nipro.com.ph/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-8 text-center transition-all duration-300 hover:border-brand-300 hover:bg-brand-50/50 active:scale-[0.98]"
            >
              <span className="text-sm font-semibold text-gray-900">
                View all products
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs text-brand-600">
                Visit Nipro website
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
