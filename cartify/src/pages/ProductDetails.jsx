import { useState } from "react";

export const ProductDetails = ({ product, onClose, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative border border-gray-300">
            {/* Close Button */}
            <button
                className="absolute top-2 right-2 text-xl font-bold text-gray-700"
                onClick={onClose}
            >
                ×
            </button>

            {/* Product Details */}
            <h1 className="text-xl font-bold">{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} className="w-full my-4" />
            <p>{product.description}</p>
            <p className="text-lg font-semibold">Price: ${product.price}</p>

            {/* Quantity Buttons - Styled with Borders */}
            <div className="flex items-center mt-4 space-x-4 border p-2 rounded">
                <button 
                    onClick={decreaseQuantity} 
                    className="px-3 py-1 bg-gray-300 rounded text-lg font-bold border border-gray-500"
                >
                    -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button 
                    onClick={increaseQuantity} 
                    className="px-3 py-1 bg-gray-300 rounded text-lg font-bold border border-gray-500"
                >
                    +
                </button>
            </div>

            {/* Add to Cart Button */}
            <button 
                onClick={() => addToCart(product, quantity)} 
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Add {quantity} to Cart
            </button>
        </div>
    );
};

export default ProductDetails;