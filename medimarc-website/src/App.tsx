import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ClientMarquee } from "./components/ClientMarquee";
import { Catalog } from "./components/catalog/Catalog";
import { StoryTimeline } from "./components/StoryTimeline";
import { About } from "./components/About";
import { QuoteSection } from "./components/quote/QuoteSection";
import { QuoteTray } from "./components/quote/QuoteTray";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-dvh w-full bg-canvas font-sans text-ink">
      <ScrollProgress />
      <Navbar />
      <main id="main" className="pb-20 sm:pb-0">
        <Hero />
        <ClientMarquee />
        <Catalog />
        <StoryTimeline />
        <About />
        <QuoteSection />
      </main>
      <Footer />
      <QuoteTray />
    </div>
  );
}
