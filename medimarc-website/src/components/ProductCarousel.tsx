import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ProductCard from "./ProductCard";
import "../styles/ProductCarousel.css";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <div className="carousel-container">
      <div className="carousel-slides-container">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`carousel-slide ${
              index === currentIndex
                ? "active"
                : index < currentIndex
                ? "previous"
                : "next"
            }`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        className="carousel-nav-left"
        onClick={prevSlide}
        aria-label="Previous product"
      >
        <ChevronLeftIcon size={24} />
      </button>
      <button
        className="carousel-nav-right"
        onClick={nextSlide}
        aria-label="Next product"
      >
        <ChevronRightIcon size={24} />
      </button>
      {/* Indicators */}
      <div className="carousel-indicators">
        {products.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => {
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
