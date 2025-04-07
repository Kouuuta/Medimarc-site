import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productCategories, Category } from "../data/product"; // Make sure the file path is correct
import CategoryFilter from "./CategoryFilter";
import { SearchIcon } from "lucide-react";
import "../styles/ProductList.css"; // Adjusted path

interface ProductListProps {
  onSelectCategory: (category: Category) => void;
}

const ProductList: React.FC<ProductListProps> = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = productCategories.filter(
    (category: { id: string; name: string }) =>
      (filter === "all" || category.id === filter) &&
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (category: Category) => {
    // Navigate to the ProductDetails page with the selected category
    navigate(`/products/${category.id}`);
  };

  return (
    <div className="containers">
      <div className="product-list-container">
        <div className="product-list-header">
          <CategoryFilter
            categories={productCategories}
            onFilterChange={setFilter}
          />
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="category-grid" data-aos="fade-up">
          {filteredCategories.map((category: Category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category)} // Update to call handleCategoryClick
            >
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>
              <div className="category-name">
                <h3>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {filteredCategories.length === 0 && (
          <div className="no-products-message">
            <p>No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
