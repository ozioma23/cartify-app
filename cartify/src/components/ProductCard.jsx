import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
