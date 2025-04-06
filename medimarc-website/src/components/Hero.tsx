import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "../styles/Hero.css"; // Adjusted path

const slides = [
  {
    id: 1,
    image: "/images/medimarc-pic.png",
    title: "Delivering essential healthcare supplies",
    subtitle: "To our valued customers",
    description:
      "Providing high-quality medical supplies for healthcare professionals",
    learnMoreLink: "#about-us",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Live Longer. Live Better.",
    subtitle: "Quality healthcare products",
    description: "Check more information and offers about NIPRO",
    learnMoreLink: "https://nipro.com.ph/#what-we-offer",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Trusted Medical Supplies",
    subtitle: "For healthcare professionals",
    description: "Reliable products that meet the highest standards",
    learnMoreLink: "https://nipro.com.ph/",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="hero-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <div className="overlay" />
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="text-overlay">
              <div className="text-container">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <p className="slide-description">{slide.description}</p>
                {/* Learn More Button */}
                <a href={slide.learnMoreLink} className="learn-more-btn">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevSlide}
        className="prev-slide-btn"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="next-slide-btn"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
