import { ChevronDownIcon } from "lucide-react";
import "../styles/CategoryFilter.css"; // Adjusted path

interface Category {
  id: string;
  name: string;
  image: string;
  products: string[];
}

interface CategoryFilterProps {
  categories: Category[];
  onFilterChange: (filter: string) => void;
}

const CategoryFilter = ({
  categories,
  onFilterChange,
}: CategoryFilterProps) => {
  return (
    <div className="category-filter-container">
      <label htmlFor="category" className="filter-label">
        Filter by Category:
      </label>
      <div className="select-container">
        <select
          id="category"
          onChange={(e) => onFilterChange(e.target.value)}
          className="category-select"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="dropdown-icon">
          <ChevronDownIcon size={16} />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
