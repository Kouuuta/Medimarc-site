# Medimarc Trading — Website

A modern, responsive website for **Medimarc Trading**, a trusted distributor of high-quality medical and healthcare products in the Philippines.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Tech Stack

| Layer              | Technology                         |
| ------------------ | ---------------------------------- |
| Framework          | React 19                           |
| Language           | TypeScript                         |
| Build Tool         | Vite 6                             |
| Styling            | Tailwind CSS v4                    |
| Animation          | Framer Motion                      |
| Routing            | React Router DOM v7                |
| Icons              | Lucide React                       |
| Package Manager    | npm                                |

## Features

- **Animated hero** with parallax scrolling and 3D mouse-tilt interaction
- **Product catalog** with category filtering and search
- **Featured products carousel** with drag-to-navigate
- **Smooth page transitions** using Framer Motion's AnimatePresence
- **Scroll progress indicator** across the top of the page
- **Responsive design** — mobile-first with adaptive layouts
- **Accessible** — reduced motion support, keyboard navigation, proper ARIA labels
- **Polished micro-interactions** — spring animations, staggered reveals, press feedback

## Project Structure

```
src/
├── pages/             # Route-level page components
│   ├── Home.tsx
│   ├── Products.tsx
│   └── ProductDetails.tsx
├── components/
│   ├── layout/        # Shell components (Navbar, Footer, ScrollProgress)
│   ├── sections/      # Page section components (Hero, AboutUs, etc.)
│   └── ui/            # Reusable primitives (Button, Card, SectionTitle)
├── hooks/             # Custom React hooks
├── lib/               # Utilities, animation variants, constants
├── data/              # Product data and types
└── ...
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Design System

- **Primary**: Blue-600 (`#2563eb`) — the core brand color
- **Accent**: Violet-500 (`#8b5cf6`) — used sparingly for highlights
- **Neutrals**: Gray scale (50–900)
- **Typography**: Inter (body), system sans-serif stack (headings)
- **Easing**: `cubic-bezier(0.23, 1, 0.32, 1)` for UI interactions
- **Springs**: `{ duration: 0.5, bounce: 0.15 }` for 3D and hover effects

## About Medimarc Trading

Medimarc Trading provides a wide range of quality and cost-effective hospital supplies since its establishment in 2013. As an authorized distributor of Nipro Medical Corporation, they serve hospitals across Metro Manila and Southern Luzon.
