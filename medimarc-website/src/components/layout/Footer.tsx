import { Phone, Mail, MapPin } from "lucide-react";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/medimarctrading", path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
  { label: "Shopee", href: "https://shopee.ph/medimarc", path: "M4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2 -1.857l.867 -12.143h-16z M8.5 7c0 -1.653 1.5 -4 3.5 -4s3.5 2.347 3.5 4 M9.5 17c.413 .462 1 1 2.5 1s2.5 -.897 2.5 -2s-1 -1.5 -2.5 -2s-2 -1.47 -2 -2c0 -1.104 1 -2 2 -2s1.5 0 2.5 1" },
  { label: "TikTok", href: "https://www.tiktok.com/@medimarc.trading", path: "M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" },
];

const contacts = [
  { icon: MapPin, text: "Unit 303 M-Place Bldg, No. 96 Maginhawa, St. Teachers Village, Quezon City", href: "https://maps.google.com/?q=96+Maginhawa+Quezon+City" },
  { icon: Phone, text: "+63 917 863 7544", href: "tel:+639178637544" },
  { icon: Mail, text: "medimarc.mrc@gmail.com", href: "mailto:medimarc.mrc@gmail.com" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">MEDIMARC</h3>
            <p className="text-sm leading-relaxed">Delivering essential healthcare supplies to our valued customers since 2020.</p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-gray-400 hover:text-white" aria-label={s.label}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "Products", "About Us", "Contact Us"].map((l) => (
                <li key={l}>
                  <a href={l === "Home" ? "/" : l === "Products" ? "/products" : `/#${l.toLowerCase().replace(" ", "-")}`} className="text-sm hover:text-white transition-colors no-underline">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              {contacts.map((c) => (
                <li key={c.text}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm hover:text-white transition-colors no-underline">
                    <c.icon size={15} className="mt-0.5 shrink-0 text-blue-400" />
                    <span>{c.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-600 space-y-1">
          <p>All information, pictures and images on this site are copyrighted material and owned by their respective creators or owners.</p>
          <p>&copy; {new Date().getFullYear()} Medimarc Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
