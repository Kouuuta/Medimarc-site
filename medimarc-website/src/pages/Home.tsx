import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Hero } from "../components/sections/Hero";
import { StatsSection } from "../components/sections/StatsSection";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";
import { AboutSection } from "../components/sections/AboutSection";
import { VisionMission } from "../components/sections/VisionMission";
import { ContactSection } from "../components/sections/ContactSection";
import { pageTransition } from "../lib/animations";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Hero />
      <StatsSection />
      <FeaturedProducts />
      <AboutSection />
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/30 to-white py-24">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <VisionMission />
        </div>
      </section>
      <ContactSection />
    </motion.div>
  );
}
