import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

export function VisionMission() {
  return (
    <div className="space-y-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16"
      >
        <div className="flex-1">
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest">
            Mission
          </span>
          <h2 className="mt-2 mb-4 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
            Our Mission
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
            Our mission is to enhance the quality of work for our clients and
            partners by providing exceptional service, cutting-edge products,
            and innovative solutions. We are dedicated to improving the lives of
            patients through our commitment to excellence in all aspects of
            healthcare.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-sm backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
              alt="Medical laboratory research"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-16"
      >
        <div className="flex-1">
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest">
            Vision
          </span>
          <h2 className="mt-2 mb-4 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
            Our Vision
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
            Our vision is to become a global leader in healthcare, offering
            exceptional service, product innovation, and advanced technologies.
            Through continuous growth, innovation, and collaboration, we aim to
            create a healthier future for individuals and communities worldwide.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-sm backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
              alt="Patient healthcare"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
