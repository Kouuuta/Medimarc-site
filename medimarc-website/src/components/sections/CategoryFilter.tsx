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

export function CategoryFilter({ categories, onFilterChange }: CategoryFilterProps) {
  return (
    <select
      id="category"
      onChange={(e) => onFilterChange(e.target.value)}
      className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-400 transition-all"
    >
      <option value="all">All Categories</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
