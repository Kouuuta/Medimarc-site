import ProductCarousel from "./ProductCarousel";
import "../styles/FeaturedProducts.css"; // Adjusted path

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "NIPRO Syringes",
      description:
        "Nipro’s syringes are available in a variety of combinations: from 2- or 3-part, with or without needle, fixed insulin needle, and three different luer tips.",
      image: "syringes-withneedles.png",
      link: "https://nipro.com.ph/product/540/",
    },
    {
      id: 2,
      name: "NIPRO Infusion Pump",
      description:
        "SmartFusion Series hawk-i1 Infusion Pump. Synchronize ease-of-use, safety and interoperability",
      image: "infusion-pump.webp",
      link: "https://nipro.com.ph/product/infusion-pump/",
    },
    {
      id: 3,
      name: "NIPRO SafeTouch™ IV Catheter",
      description:
        "Nipro’s Safetouch IV catheters offer a smooth and easy infusion with an ultra-sharp, three-beveled Nipro needle protected by a safety mechanism to reduce the risk of needle stick injuries (NSI). Achieve security with this passive safety device that does not require a change in puncture technique.",
      image: "catheter.webp",
      link: "https://nipro.com.ph/product/safetouch-iv-catheter/",
    },
    {
      id: 4,
      name: "NIPRO Syringe Pump",
      description:
        "SmartFusion Series hawk-s1 Syringe Pump. Safe, simple. smart.  ",
      image: "syringe-pump.webp",
      link: "https://nipro.com.ph/product/syringe-pump/",
    },
  ];

  return (
    <div className="featured-color-bg">
      <div className="featured-products-container">
        <div className="featured-products-header" data-aos="fade-up">
          <h2 className="featured-products-title">Overview of our products</h2>
          <div className="featured-products-title-underline"></div>
        </div>
        <div className="featured-products-content">
          {/* Description Section (Left) */}
          <div
            className="description-section"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="description-subtitle">
              Featured Products by medimarc
            </h2>
            <h1 className="description-title">Discover Our NIPRO Products</h1>
            <p className="description-text">
              provides high-quality, cost-effective hospital supplies, serving
              healthcare facilities since 2013. As an authorized distributor of
              trusted brands like Nipro, Cardinal Health, and Terumo, the
              company offers innovative medical devices, surgical consumables,
              and infection control products. With decades of expertise,
              Medimarc delivers reliable solutions to hospitals across Metro
              Manila and Southern Luzon, continually expanding its partnerships
              to meet the industry's evolving needs.
            </p>
            <div className="view-all-products">
              <a
                href="https://nipro.com.ph/products/"
                className="view-all-button"
              >
                View All Products
              </a>
            </div>
          </div>
          {/* Carousel Section (Right) */}
          <div
            className="carousel-section"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <ProductCarousel products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
