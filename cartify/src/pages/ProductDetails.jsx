import { useState } from "react";

const ProductDetails = ({ selectedProduct, setSelectedProduct, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    };

    if (!selectedProduct) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                    onClick={() => setSelectedProduct(null)}
                >
                    ✖
                </button>

                <img
                    src={selectedProduct.thumbnail}
                    alt={selectedProduct.title}
                    className="w-full h-64 object-contain rounded-md mb-4"
                />

                <div className="space-y-3">
                    <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
                    <p className="text-gray-700">{selectedProduct.description}</p>
                    
                    <div className="flex items-center justify-between">
                        <p className="text-black font-bold text-xl">${selectedProduct.price}</p>
                        <p className="text-yellow-500">⭐ {selectedProduct.rating}</p>
                    </div>
                    
                    <p className="text-gray-500">Brand: {selectedProduct.brand}</p>
                    <p className="text-gray-500">Category: {selectedProduct.category}</p>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={decreaseQuantity}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-lg font-bold"
                        >
                            -
                        </button>
                        <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                        <button
                            onClick={increaseQuantity}
                            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-lg font-bold"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            addToCart(selectedProduct, quantity);
                            setSelectedProduct(null);
                        }}
                        className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors"
                    >
                        Add {quantity} to Cart - ${(selectedProduct.price * quantity).toFixed(2)}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
