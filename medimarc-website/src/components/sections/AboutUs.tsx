import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { VisionMission } from "./VisionMission";

const tabs = [
  { id: "history", label: "History" },
  { id: "first-sale", label: "First Sale" },
  { id: "clients", label: "Clients" },
];

const content: Record<string, string> = {
  history: "Established by Arnold M. Castillo, the company initially retailed medical consumable products from his former employers where trust were gained in the course of his employment as Sales Manager at Lifelink, Inc. The joining of his spouse, Mirriam R. Castillo, in the year 2020 and in the summit of Covid-19 pandemic, still opens new opportunities for marketing new products and sales development.",
  "first-sale": "October 2022, in the establishment of the first Nipro Medical Corporation's sales subsidiary in the Philippines, Medimarc Trading was appointed by Nipro Medical Corporation as one of the authorized distributors for Hospital Care Products in Metro Manila and with exclusive distributorship agreement for Southern Luzon and Bambang Area.",
  clients: "",
};

const clients = [
  "St Luke's Medical Center (QC & Global City)", "Makati Medical Center",
  "FEU-NRMF Medical Center", "The Medical City",
  "Cardinal Santos Medical Center", "UERM Memorial Medical Center",
  "Chinese General Hospital",
];

export function AboutUs() {
  const [active, setActive] = useState("history");

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="About Us" subtitle="Building trust through quality healthcare distribution since 2013" />

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex border-b border-gray-100">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex-1 px-4 py-3.5 text-sm font-medium transition-colors relative ${
                  active === t.id ? "text-brand-600" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t.label}
                {active === t.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
              >
                {active === "clients" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {clients.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                        <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                        <span className="text-sm text-gray-700">{c}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {content[active]}
                  </p>
                )}

                <div className="mt-6 p-5 bg-gradient-to-r from-brand-50 to-sky-50 rounded-xl border border-brand-100">
                  <p className="text-sm text-gray-700 font-medium">
                    <strong className="text-brand-700">MEDIMARC TRADING</strong>, with business office situated in Quezon City, provides a wide range of quality and cost-effective hospital supplies since its establishment in 2013 as wholesaler of medical devices.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <VisionMission />
      </div>
    </section>
  );
}
