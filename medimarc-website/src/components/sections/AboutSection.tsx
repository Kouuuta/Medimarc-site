import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Award, Building2, Users } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../lib/cn";

const tabs = [
  { id: "history", label: "History", icon: Building2 },
  { id: "first-sale", label: "First Sale", icon: Award },
  { id: "clients", label: "Clients", icon: Users },
] as const;

const content: Record<
  string,
  { body: string[]; image?: string }
> = {
  history: {
    body: [
      "Established by Arnold M. Castillo, the company initially retailed medical consumable products from his former employers where trust were gained in the course of his employment as Sales Manager at Lifelink, Inc.",
      "The joining of his spouse, Mirriam R. Castillo, in the year 2020 and in the summit of Covid-19 pandemic, still opens new opportunities for marketing new products and sales development.",
    ],
    image: "/images/medimarc-pic.png",
  },
  "first-sale": {
    body: [
      "October 2022, in the establishment of the first Nipro Medical Corporation's sales subsidiary in the Philippines, Medimarc Trading was appointed by Nipro Medical Corporation as one of the authorized distributors for Hospital Care Products in Metro Manila and with exclusive distributorship agreement for Southern Luzon and Bambang Area.",
    ],
    image: "/images/syringes-withneedles.png",
  },
  clients: {
    body: [
      "St Luke's Medical Center (QC & Global City)",
      "Makati Medical Center",
      "FEU-NRMF Medical Center",
      "The Medical City",
      "Cardinal Santos Medical Center",
      "UERM Memorial Medical Center",
      "Chinese General Hospital",
    ],
  },
};

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("history");
  const tab = content[activeTab];

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Us"
          title="Building trust through quality healthcare distribution since 2013"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative lg:col-span-2"
          >
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-lg">
                <div className="text-4xl font-bold">2013</div>
                <div className="mt-1 text-sm text-white/80">Founded</div>
                <div className="mt-4 h-px bg-white/20" />
                <p className="mt-4 text-sm leading-relaxed text-white/90">
                  <strong>MEDIMARC TRADING</strong>, with business office
                  situated in Quezon City, provides a wide range of quality and
                  cost-effective hospital supplies since its establishment in
                  2013 as wholesaler of medical devices.
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Business Office
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-gray-600">
                      Unit 303 M-Place Bldg.
                      <br />
                      No. 96 Maginhawa St.
                      <br />
                      Teachers Village, Quezon City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="relative mb-8 flex gap-1 rounded-xl bg-gray-100 p-1.5">
              {tabs.map((tabItem) => {
                const Icon = tabItem.icon;
                return (
                  <button
                    key={tabItem.id}
                    onClick={() => setActiveTab(tabItem.id)}
                    className={cn(
                      "relative flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                      activeTab === tabItem.id
                        ? "text-brand-700"
                        : "text-gray-500 hover:text-gray-700"
                    )}
                  >
                    {activeTab === tabItem.id && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0 rounded-lg bg-white shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {tabItem.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                {activeTab === "clients" ? (
                  <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {tab.body.map((hospital) => (
                        <div
                          key={hospital}
                          className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
                            <Building2 className="h-4 w-4 text-brand-600" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {hospital}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      {tab.body.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed text-gray-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {tab.image && (
                      <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-4 shadow-sm">
                        <img
                          src={tab.image}
                          alt=""
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
