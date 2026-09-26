import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { contact } from "../../data/company";

const channels = [
  {
    icon: PhoneIcon,
    label: contact.phone,
    detail: contact.phoneContact,
    href: contact.phoneHref,
  },
  {
    icon: MailIcon,
    label: contact.email,
    detail: "Email",
    href: contact.emailHref,
  },
  {
    icon: FacebookIcon,
    label: "Medimarc Trading",
    detail: "Facebook",
    href: contact.facebook,
  },
  {
    icon: MapPinIcon,
    label: contact.addressLine1,
    detail: contact.addressLine2,
    href: contact.mapsUrl,
  },
];

export function QuoteSection() {
  return (
    <section
      id="quote"
      className="w-full scroll-mt-18 bg-ink py-24 text-paper md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display font-bold text-paper">Request a quote</h2>
          <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-paper/70">
            Tell us what your ward, pharmacy or clinic needs. We&apos;ll come
            back with pricing and availability.
          </p>

          <ul className="mt-12 border-t border-paper/15">
            {channels.map(({ icon: Icon, label, detail, href }) => {
              const content = (
                <>
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-sky"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="block font-medium break-words text-paper underline-offset-4 group-hover:underline">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm text-paper/60">
                      {detail}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={label} className="border-b border-paper/15">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-start gap-4 py-5 transition-colors duration-160 ease-out-quint hover-el:text-sky"
                  >
                    {content}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
