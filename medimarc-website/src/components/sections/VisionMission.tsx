import { motion } from "framer-motion";

export function VisionMission() {
  return (
    <div className="mt-24 space-y-16">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex-1">
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest">Mission</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
            Our mission is to enhance the quality of work for our clients and partners by providing exceptional service, cutting-edge products, and innovative solutions. We are dedicated to improving the lives of patients through our commitment to excellence in all aspects of healthcare.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <img src="https://www.nextecgroup.com/wp-content/uploads/2021/08/iStock-1267162531-scaled.jpg" alt="Laboratory" className="w-full h-64 lg:h-72 object-cover" loading="lazy" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex-1">
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest">Vision</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">Our Vision</h2>
          <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
            Our vision is to become a global leader in healthcare, offering exceptional service, product innovation, and advanced technologies. Through continuous growth, innovation, and collaboration, we aim to create a healthier future for individuals and communities worldwide.
          </p>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <img src="https://www.floridatoday.com/gcdn/-mm-/88059d553bda2d43ab07f80a8e315b1f28f0946d/c=0-612-5939-3953/local/-/media/2022/08/20/USATODAY/usatsports/elderly-woman-with-younger-doctor.jpg" alt="Healthcare" className="w-full h-64 lg:h-72 object-cover" loading="lazy" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
