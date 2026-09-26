import heroSyringes from "../assets/images/hero-syringes.jpg";
import stockroom from "../assets/images/stockroom.jpg";
import logoMark from "../assets/images/logo.png";
import type { Client, Milestone, NavLink } from "../types/catalog";

export const images = {
  logo: logoMark,
  hero: heroSyringes,
  stockroom,
};

/**
 * Hospitals and clinics we supply. Rendered as inline SVG monograms rather
 * than fetched favicons: a hotlinked icon request leaks every visitor's
 * IP to a third party and silently degrades to a broken image when blocked.
 */
export const clients: Client[] = [
  { name: "St. Luke's Medical Center, Quezon City", short: "SL" },
  { name: "St. Luke's Medical Center, Global City", short: "SL" },
  { name: "Makati Medical Center", short: "MMC" },
  { name: "FEU-NRMF Medical Center", short: "FEU" },
  { name: "The Medical City", short: "TMC" },
  { name: "Cardinal Santos Medical Center", short: "CSMC" },
  { name: "UERM Memorial Medical Center", short: "UERM" },
  { name: "Chinese General Hospital", short: "CGH" },
];

export const milestones: Milestone[] = [
  {
    at: 2013,
    year: "2013",
    title: "Founded in Quezon City",
    body: "Arnold M. Castillo starts Medimarc as a wholesaler of medical devices, building on trust earned as Sales Manager at Lifelink, Inc.",
  },
  {
    at: 2020.4,
    year: "2020",
    title: "Growing through the pandemic",
    body: "Mirriam R. Castillo joins at the height of Covid-19, opening new product lines and sales channels.",
  },
  {
    at: 2022.8,
    year: "2022",
    title: "Authorized Nipro distributor",
    body: "Appointed by Nipro Medical Corporation for Hospital Care Products in Metro Manila, with exclusive distributorship for Southern Luzon and the Bambang area.",
  },
];

export const brands = [
  { name: "Nipro", note: "Authorized distributor" },
  { name: "Cardinal Health", note: "Hospital supplies" },
  { name: "Terumo", note: "Hospital supplies" },
];

export const mission =
  "To enhance the quality of work for our clients and partners by providing exceptional service, cutting-edge products, and innovative solutions. We are dedicated to improving the lives of patients through our commitment to excellence in all aspects of healthcare.";

export const vision =
  "To become a global leader in healthcare, offering exceptional service, product innovation, and advanced technologies. Through continuous growth, innovation, and collaboration, we aim to create a healthier future for individuals and communities worldwide.";

export const contact = {
  phone: "+63 917 863 7544",
  phoneHref: "tel:+639178637544",
  phoneContact: "Arnold M. Castillo",
  email: "medimarc.mrc@gmail.com",
  emailHref: "mailto:medimarc.mrc@gmail.com",
  facebook: "https://www.facebook.com/medimarctrading",
  shopee: "https://shopee.ph/medimarc",
  tiktok: "https://www.tiktok.com/@medimarc.trading",
  addressLine1: "Unit 303 M-Place Bldg., No. 96 Maginhawa St.",
  addressLine2: "Teachers Village, Quezon City",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=96+Maginhawa+St+Teachers+Village+Quezon+City",
};

export const navLinks: NavLink[] = [
  { id: "catalog", label: "Products" },
  { id: "story", label: "Our story" },
  { id: "about", label: "About" },
  { id: "quote", label: "Contact" },
];
