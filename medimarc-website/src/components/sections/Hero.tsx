import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/medimarc-pic.png",
    title: "Delivering essential healthcare supplies",
    desc: "Trusted distributor of high-quality medical products for hospitals and clinics across the Philippines.",
    link: "/#about-us",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Live Longer. Live Better.",
    desc: "Quality healthcare products from NIPRO — trusted by medical professionals worldwide.",
    link: "https://nipro.com.ph/#what-we-offer",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Trusted Medical Supplies",
    desc: "Reliable products that meet the highest standards of healthcare excellence.",
    link: "https://nipro.com.ph/",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-dvh overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" loading="eager" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 z-10" />

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl"
            >
              <span className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest uppercase bg-white/15 text-white/90 rounded-full">
                Medimarc Trading
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                {slide.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={slide.link}
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors no-underline text-sm shadow-sm"
                >
                  Learn more
                  <ChevronRight size={16} className="ml-1" />
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors no-underline text-sm"
                >
                  View products
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button onClick={prev} className="absolute left-5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="Previous">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-5 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="Next">
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
