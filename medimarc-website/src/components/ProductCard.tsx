import "../styles/ProductCard.css"; // Adjusted path

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const productImage = `/images/${product.image}`; // Referencing the image path directly

  return (
    <div className="product-card-container">
      <div className="image-container">
        <img src={productImage} alt={product.name} className="product-image" />
      </div>
      <div className="text-container">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <a
          href={product.link}
          className="add-to-cart-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Product
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
