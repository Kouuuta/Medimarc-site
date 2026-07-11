# Medimarc Trading — Website Content Reference

Source: [github.com/Kouuuta/Medimarc-site](https://github.com/Kouuuta/Medimarc-site)
Compiled from: `src/components/sections/`, `src/components/layout/`, `src/data/product.ts`

---

## 1. Hero Section (`Hero.tsx`)

Three rotating slides:

| # | Title | Description | Link | Image source |
|---|---|---|---|---|
| 1 | Delivering essential healthcare supplies | Trusted distributor of high-quality medical products for hospitals and clinics across the Philippines. | `/#about-us` | `/images/medimarc-pic.png` (local) |
| 2 | Live Longer. Live Better. | Quality healthcare products from NIPRO — trusted by medical professionals worldwide. | `https://nipro.com.ph/#what-we-offer` | Unsplash (external) |
| 3 | Trusted Medical Supplies | Reliable products that meet the highest standards of healthcare excellence. | `https://nipro.com.ph/` | Unsplash (external) |

Badge label: **Medimarc Trading**

---

## 2. Featured Products Section (`FeaturedProducts.tsx`)

**Heading:** Featured Products
**Subheading:** Discover our range of NIPRO medical products

**Overview panel:**
- Label: Overview
- Title: Discover Our NIPRO Products
- Body: Medimarc Trading provides high-quality, cost-effective hospital supplies as an authorized distributor of Nipro, Cardinal Health, and Terumo.
- CTA: "View all products" → `https://nipro.com.ph/products/`

**Carousel products:**

| Name | Description | Image file | Link |
|---|---|---|---|
| NIPRO Syringes | Available in 2- or 3-part, with or without needle, fixed insulin needle, and three luer tip options. | `syringes-withneedles.png` | https://nipro.com.ph/product/540/ |
| NIPRO Infusion Pump | SmartFusion Series hawk-i1 — synchronizing ease-of-use, safety, and interoperability. | `infusion-pump.webp` | https://nipro.com.ph/product/infusion-pump/ |
| NIPRO SafeTouch™ IV Catheter | Ultra-sharp, three-beveled needle with passive safety mechanism. | `catheter.webp` | https://nipro.com.ph/product/safetouch-iv-catheter/ |
| NIPRO Syringe Pump | SmartFusion Series hawk-s1 — safe, simple, smart infusion delivery. | `syringe-pump.webp` | https://nipro.com.ph/product/syringe-pump/ |

---

## 3. About Us Section (`AboutUs.tsx`)

**Heading:** About Us
**Subheading:** Building trust through quality healthcare distribution since 2013

Tabbed content — **History / First Sale / Clients**

### History
Established by Arnold M. Castillo, the company initially retailed medical consumable products from his former employers where trust were gained in the course of his employment as Sales Manager at Lifelink, Inc. The joining of his spouse, Mirriam R. Castillo, in the year 2020 and in the summit of Covid-19 pandemic, still opens new opportunities for marketing new products and sales development.

### First Sale
October 2022, in the establishment of the first Nipro Medical Corporation's sales subsidiary in the Philippines, Medimarc Trading was appointed by Nipro Medical Corporation as one of the authorized distributors for Hospital Care Products in Metro Manila and with exclusive distributorship agreement for Southern Luzon and Bambang Area.

### Clients
- St Luke's Medical Center (QC & Global City)
- Makati Medical Center
- FEU-NRMF Medical Center
- The Medical City
- Cardinal Santos Medical Center
- UERM Memorial Medical Center
- Chinese General Hospital

### Highlighted callout (shown under every tab)
**MEDIMARC TRADING**, with business office situated in Quezon City, provides a wide range of quality and cost-effective hospital supplies since its establishment in 2013 as wholesaler of medical devices.

---

## 4. Mission & Vision (`VisionMission.tsx`)

### Our Mission
Our mission is to enhance the quality of work for our clients and partners by providing exceptional service, cutting-edge products, and innovative solutions. We are dedicated to improving the lives of patients through our commitment to excellence in all aspects of healthcare.

- Image: `https://www.nextecgroup.com/wp-content/uploads/2021/08/iStock-1267162531-scaled.jpg` (alt: "Laboratory") — **external hotlink, likely broken due to hotlink protection**

### Our Vision
Our vision is to become a global leader in healthcare, offering exceptional service, product innovation, and advanced technologies. Through continuous growth, innovation, and collaboration, we aim to create a healthier future for individuals and communities worldwide.

- Image: `https://www.floridatoday.com/gcdn/-mm-/88059d553bda2d43ab07f80a8e315b1f28f0946d/c=0-612-5939-3953/local/-/media/2022/08/20/USATODAY/usatsports/elderly-woman-with-younger-doctor.jpg` (alt: "Healthcare") — **external hotlink, likely broken due to hotlink protection**

> **Note:** Both images are pulled directly from third-party websites (`nextecgroup.com`, `floridatoday.com`) instead of being hosted locally in `/public/images/`. This is almost certainly why they render as broken image icons — those sites can block hotlinking or the URLs may have changed/expired.

---

## 5. Contact Section (`Contact.tsx`)

**Heading:** Contact Us
**Subheading:** Get in touch with our team for inquiries and partnerships

| Channel | Value | Detail |
|---|---|---|
| Facebook | Medimarc Trading | `https://www.facebook.com/medimarctrading` |
| Phone | +63 917 863 7544 | Arnold M. Castillo |
| Email | medimarc.mrc@gmail.com | — |
| Address | Unit 303 M-Place Bldg. | No. 96 Maginhawa St., Teachers Village, QC |

**Side panel:**
- Heading: Let's work together
- Body: For inquiries, product details, or partnership opportunities, reach out via phone, email, or Facebook.

---

## 6. Footer (`Footer.tsx`)

**Brand blurb:** Delivering essential healthcare supplies to our valued customers since 2020.

**Social links:**
- Facebook — `https://www.facebook.com/medimarctrading`
- Shopee — `https://shopee.ph/medimarc`
- TikTok — `https://www.tiktok.com/@medimarc.trading`

**Quick Links:** Home / Products / About Us / Contact Us

**Contact:**
- Unit 303 M-Place Bldg, No. 96 Maginhawa, St. Teachers Village, Quezon City
- +63 917 863 7544
- medimarc.mrc@gmail.com

**Legal:**
> All information, pictures and images on this site are copyrighted material and owned by their respective creators or owners.
> © [current year] Medimarc Trading. All rights reserved.

---

## 7. Full Product Catalog (`src/data/product.ts`)

### NIPRO Syringe with Needle (`/images/syringes-withneedles.png`)
- 1mL Tuberculin Syringe w/ 25GX5/8 Needle E-Beam
- 1mL Tuberculin Syringe w/ 26GX1/2 Needle E-beam
- 0.5mL 30Gx5/16 (8mm) INSULIN 100U E-Beam, Blister
- 1mL 27Gx1/2" INSULIN 100U E-Beam, Blister
- 1mL 29Gx1/2" INSULIN 100U E-Beam, Blister
- 1mL 30Gx5/16" INSULIN 100U E-Beam, Blister
- 1mL 30Gx1/2" INSULIN 100U E-Beam, Blister
- 3mL Syringe Luer Lock w/ 23GX1 Needle E-Beam
- 5mL Syringe Luer Lock w/ 21GX1 Needle E-beam
- 5mL Syringe Luer Lock w/ 23GX1 Needle E-beam
- 10mL Syringe Luer Lock w/ 21GX1 Needle E-beam
- 10mL Syringe Luer Lock w/ 23GX1 Needle E-beam

### NIPRO Syringe without Needle (`/images/nipro-syringes.png`)
- 3mL Syringe LUER LOCK W/O Needle E-beam
- 3mL Syringe LUER SLIP W/O Needle (ECC. TIP) E-beam
- 5mL Syringe LUER LOCK W/O Needle E-beam
- 5mL Syringe LUER SLIP W/O Needle E-beam
- 10mL Syringe LUER LOCK W/O Needle E-beam
- 10mL Syringe LUER SLIP W/O Needle E-beam
- 20mL Syringe LUER LOCK W/O Needle E-beam
- 20mL Syringe LUER SLIP W/O Needle E-beam
- 30mL Syringe LUER LOCK W/O Needle E-beam
- 50mL Syringe LUER LOCK W/O Needle E-beam
- 50mL CATHETER TIP W/O Needle (ECC. TIP) E-beam
- 50mL LUER SLIP W/O NEEDLE (ECC. TIP) E-beam

### NIPRO Hypodermic Needle (`/images/hypodermic-needles.png`)
- PACKED NEEDLE 18Gx1 ETO
- PACKED NEEDLE 18Gx1-1/2 ETO
- PACKED NEEDLE 19Gx1-1/2 ETO
- PACKED NEEDLE 20Gx1 ETO
- PACKED NEEDLE 21Gx1 ETO
- PACKED NEEDLE 22Gx1 ETO
- PACKED NEEDLE 23Gx1 ETO
- PACKED NEEDLE 24Gx1 ETO
- PACKED NEEDLE 25Gx5/8 ETO
- PACKED NEEDLE 25Gx1 ETO
- PACKED NEEDLE 26Gx1/2 ETO (CE)
- PACKED NEEDLE 27Gx1/2 ETO (CE)

### NIPRO SafeTouch Safety IV Catheter (`/images/catheter.webp`)
- SAFETOUCH WING CATH W/O Injection Port 18Gx1-1/4 ETO
- SAFETOUCH WING CATH W/O Injection Port 20Gx1-1/4 ETO
- SAFETOUCH WING CATH W/O Injection Port 22Gx1 ETO
- SAFETOUCH WING CATH W/O Injection Port 24Gx3/4 ETO

### NIPRO Amsafe Prefilled Syringe (`/images/prefilled.png`)
- 3mL AMSAFE Prefilled Syringe
- 5mL AMSAFE Prefilled Syringe
- 10mL AMSAFE Prefilled Syringe

### NIPRO Spinal Needle (`/images/spinalneedle.png`)
- Spinal Needle 18Gx3-1/2 (88mm) CONTAINER (ETO)
- Spinal Needle 20Gx3-1/2 (88mm) CONTAINER (ETO)
- Spinal Needle 21Gx3-1/2 (88mm) CONTAINER (ETO)
- Spinal Needle 22Gx3-1/2 (88mm) CONTAINER (ETO)
- Spinal Needle 26Gx3-1/2 (88mm) CONTAINER (ETO)
- Spinal Needle 27Gx3-1/2 (88mm) CONTAINER (ETO)

### NIPRO Surefuser Elastomeric Infusion Pump, Disposable (`/images/surefuser.png`)
- Surefuser Variable Infusion Elastomeric Infusion System, 100mL
- Infusion Elastomeric Infusion System, 300mL

### Other Hospital Products (`/images/administration-set.png`)
- Nipro Safetouch Plug (Needless Connector)
- Nipro 3 Way Stop Cock
- Nipro IV Set Blood Administration Set

---

## 8. Company Facts (quick reference)

| Field | Value |
|---|---|
| Legal/trade name | Medimarc Trading |
| Founder | Arnold M. Castillo |
| Co-owner (joined 2020) | Mirriam R. Castillo |
| Founded | 2013 (as wholesaler of medical devices) |
| Nipro authorized distributor since | October 2022 |
| Distribution territory | Metro Manila (authorized); exclusive for Southern Luzon and Bambang Area |
| Business office | Unit 303 M-Place Bldg., No. 96 Maginhawa St., Teachers Village, Quezon City |
| Phone | +63 917 863 7544 |
| Email | medimarc.mrc@gmail.com |
| Facebook | facebook.com/medimarctrading |
| Shopee | shopee.ph/medimarc |
| TikTok | @medimarc.trading |
| Brand partners | Nipro, Cardinal Health, Terumo |
| Customer since (footer copy) | 2020 |

---

## 9. Known Local Image Assets (`public/images/`)

```
administration-set.png
catheter.webp
hypodermic-needles.png
infusion-pump.webp
medimarc-pic.png
nipro-syringes.png
prefilled.png
spinalneedle.png
surefuser.png
syringe-pump.webp
syringes-withneedles.png
```

**Missing/not locally hosted:** the "Laboratory" and "Healthcare" images used in the Mission/Vision section are not among these — they're pulled live from external sites, which is the root cause of the broken images.
