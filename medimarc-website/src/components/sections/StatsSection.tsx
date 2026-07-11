import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2013", label: "Founded" },
  { value: "2022", label: "Nipro Authorized Distributor" },
  { value: "7+", label: "Major Hospital Clients" },
  { value: "3", label: "Brand Partners (Nipro, Cardinal Health, Terumo)" },
];

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="text-center"
    >
      <div className="text-2xl font-bold text-white sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-brand-600 to-brand-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
