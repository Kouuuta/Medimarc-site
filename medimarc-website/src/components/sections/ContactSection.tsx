import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { stagger, fadeUp } from "../../lib/animations";
import { cn } from "../../lib/cn";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Unit 303 M-Place Bldg., No. 96 Maginhawa St., Teachers Village, Quezon City",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 917 863 7544",
    detail: "Arnold M. Castillo",
  },
  {
    icon: Mail,
    label: "Email",
    value: "medimarc.mrc@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Facebook",
    value: "Medimarc Trading",
    href: "https://www.facebook.com/medimarctrading",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="Have questions or ready to place an order? Reach out to our team."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6 lg:col-span-2"
          >
            {contactInfo.map((item) => {
              const content = (
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                    <item.icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-500">
                      {item.value}
                    </p>
                    {item.detail && (
                      <p className="text-xs text-gray-400">{item.detail}</p>
                    )}
                  </div>
                </div>
              );

              if (item.href) {
                return (
                  <motion.a
                    key={item.label}
                    variants={fadeUp}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-colors hover:text-brand-600"
                  >
                    {content}
                  </motion.a>
                );
              }

              return (
                <motion.div key={item.label} variants={fadeUp}>
                  {content}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className={cn(
                    "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm",
                    "placeholder:text-gray-400",
                    "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                    "transition-all duration-200"
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm",
                    "placeholder:text-gray-400",
                    "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                    "transition-all duration-200"
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className={cn(
                    "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm",
                    "placeholder:text-gray-400",
                    "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                    "transition-all duration-200"
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className={cn(
                    "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm",
                    "placeholder:text-gray-400",
                    "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20",
                    "transition-all duration-200 resize-none"
                  )}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-700 hover:shadow-md active:scale-[0.97] sm:w-auto"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-xl border border-brand-100 bg-brand-50 p-5 text-center">
          <h3 className="text-sm font-semibold text-brand-900">
            Let&apos;s work together
          </h3>
          <p className="mt-1 text-sm text-brand-700">
            For inquiries, product details, or partnership opportunities, reach
            out via phone, email, or Facebook.
          </p>
        </div>
      </div>
    </section>
  );
}
