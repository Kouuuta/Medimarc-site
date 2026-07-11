import { Link } from "react-router-dom";
import { categories } from "../../data/products";

const footerCategories = categories.slice(0, 4);

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Medimarc" className="h-9 w-auto" />
              <span className="text-lg font-bold text-gray-900">
                Medimarc
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Delivering essential healthcare supplies to our valued customers
              since 2020.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.facebook.com/medimarctrading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-brand-600"
              >
                Facebook
              </a>
              <a
                href="https://shopee.ph/medimarc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-brand-600"
              >
                Shopee
              </a>
              <a
                href="https://www.tiktok.com/@medimarc.trading"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors hover:text-brand-600"
              >
                TikTok
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Products
            </h3>
            <ul className="space-y-3">
              {footerCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/${cat.id}`}
                    className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-sm leading-relaxed text-gray-500">
                Unit 303 M-Place Bldg
                <br />
                No. 96 Maginhawa St.
                <br />
                Teachers Village, Quezon City
              </li>
              <li>
                <a
                  href="tel:+639178637544"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  +63 917 863 7544
                </a>
              </li>
              <li>
                <a
                  href="mailto:medimarc.mrc@gmail.com"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  medimarc.mrc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-400">
              All information, pictures and images on this site are copyrighted
              material and owned by their respective creators or owners.
            </p>
          </div>
          <div className="mt-3 text-center text-xs text-gray-400 sm:text-left">
            &copy; {new Date().getFullYear()} Medimarc Trading. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
