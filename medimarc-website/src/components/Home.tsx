import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Home;
