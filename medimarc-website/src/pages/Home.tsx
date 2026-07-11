import { Hero } from "../components/sections/Hero";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";
import { AboutUs } from "../components/sections/AboutUs";
import { Contact } from "../components/sections/Contact";

export function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <FeaturedProducts />
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="contact-us">
        <Contact />
      </section>
    </>
  );
}
