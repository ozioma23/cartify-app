import { useState } from "react";

const ProductDetails = ({ selectedProduct, setSelectedProduct, addToCart }) => {
  if (!selectedProduct) return null;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setSelectedProduct(null)}
        >
          ✖
        </button>

        <img
          src={selectedProduct.thumbnail}
          alt={selectedProduct.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
        <p className="text-gray-700">{selectedProduct.description}</p>
        <p className="text-black font-bold text-xl mt-2">${selectedProduct.price}</p>
        <p className="text-gray-500 text-sm">Brand: {selectedProduct.brand}</p>
        <p className="text-yellow-500 text-sm">⭐ {selectedProduct.rating}</p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-2 text-lg bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              -
            </button>
            <span className="text-lg font-bold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-2 text-lg bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              addToCart(selectedProduct, quantity); 
              setSelectedProduct(null); 
            }}
            className="px-4 py-2 border border-secondary text-black rounded-md hover:border-secondary hover:bg-secondary hover:text-white"
          >
            Add {quantity} to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;