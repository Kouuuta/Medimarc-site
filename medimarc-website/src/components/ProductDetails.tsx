import { useParams, useNavigate } from "react-router-dom";
import { productCategories } from "../data/product";
import { ArrowLeftIcon } from "lucide-react";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { categoryId } = useParams(); // Access the categoryId from URL
  const navigate = useNavigate();
  const category = productCategories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <p>Category not found</p>;
  }

  return (
    <div className="containers-details">
      <div className="product-details-container">
        <button onClick={() => navigate("/products")} className="back-button">
          <ArrowLeftIcon size={18} className="back-icon" />
          Back to categories
        </button>
        <div className="product-details-content">
          <div className="product-image-container">
            <div className="product-image-card">
              <div className="image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>
              <h2 className="category-name">{category.name}</h2>
            </div>
          </div>
          <div className="product-list-details-container">
            <div className="product-list-card">
              <h3 className="product-list-header">
                Products in this category:
              </h3>
              <ul className="product-list">
                {category.products.map((product, index) => (
                  <li key={index} className="product-item">
                    <p className="product-item-name">{product}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
