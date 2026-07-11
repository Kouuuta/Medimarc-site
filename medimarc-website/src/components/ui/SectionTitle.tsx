import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 bg-brand-500 rounded-full" />
    </motion.div>
  );
}
