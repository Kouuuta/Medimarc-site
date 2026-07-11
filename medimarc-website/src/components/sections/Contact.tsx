import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const items = [
  { icon: Facebook, label: "Medimarc Trading", href: "https://www.facebook.com/medimarctrading", detail: null },
  { icon: Phone, label: "+63 917 863 7544", href: "tel:+639178637544", detail: "Arnold M. Castillo" },
  { icon: Mail, label: "medimarc.mrc@gmail.com", href: "mailto:medimarc.mrc@gmail.com", detail: null },
  { icon: MapPin, label: "Unit 303 M-Place Bldg.", href: "https://maps.google.com/?q=96+Maginhawa+Quezon+City", detail: "No. 96 Maginhawa St., Teachers Village, QC" },
];

export function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Contact Us" subtitle="Get in touch with our team for inquiries and partnerships" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="lg:col-span-3 space-y-3"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-brand-200 hover:shadow-sm transition-all no-underline group"
              >
                <div className="p-2.5 rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-100 transition-colors">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.label}</h3>
                  {item.detail && <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>}
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-gray-200 p-6 lg:p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">Let&apos;s work together</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              For inquiries, product details, or partnership opportunities, reach out via phone, email, or Facebook.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
