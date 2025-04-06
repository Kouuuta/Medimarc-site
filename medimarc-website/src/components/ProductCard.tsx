import "../styles/ProductCard.css"; // Adjusted path

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
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
        <button className="add-to-cart-button"></button>
      </div>
    </div>
  );
};

export default ProductCard;
