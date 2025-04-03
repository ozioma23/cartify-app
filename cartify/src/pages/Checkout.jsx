import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, setCart }) => {
    const navigate = useNavigate();
  
    const totalPrice = cart.reduce(
        (total, product) => total + product.price * (product.quantity || 1),
        0
    );
  
    const handleCheckout = () => {
        setCart([]);
        localStorage.removeItem("cart");
        navigate("/deliveryPage");
    };
  
    return (
        <div className="relative min-h-screen">
            <div className="container mx-auto px-4 lg:px-20 lg:py-8 bg-primary text-white">
                <h2 className="text-md md:text-xl lg:text-2xl text-left font-bold pt-8 pb-4">
                    Checkout <span className="text-secondary">Summary</span>
                </h2>
    
                {cart.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl mb-4">Your cart is empty</p>
                        <button
                            onClick={() => navigate("/buy")}
                            className="bg-secondary px-6 py-2 rounded-md hover:bg-secondary-dark transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="checkout-container">
                        <div className="checkout-items mb-8">
                            <ul className="space-y-6">
                                {cart.map((product) => (
                                    <li 
                                        key={product.id} 
                                        className="flex items-center justify-between p-4 bg-white rounded-md shadow"
                                    >
                                        <div className="flex items-center">
                                            <img
                                                src={product.thumbnail}
                                                alt={product.title}
                                                className="w-20 h-20 object-cover rounded-md mr-4"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-black">{product.title}</h3>
                                                <p className="text-sm text-gray-600">
                                                    {product.quantity || 1} × ${product.price}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="font-bold text-black">
                                            ${(product.price * (product.quantity || 1)).toFixed(2)}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
    
                        <div className="checkout-summary border-t border-gray-700 pt-6">
                            <div className="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping:</span>
                                <span>FREE</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-gray-700">
                                <span>Total:</span>
                                <span className="text-secondary">${totalPrice.toFixed(2)}</span>
                            </div>
    
                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-4">Payment Information</h3>
                                <div className="bg-white p-4 rounded-md text-black">
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-1">Card Number</label>
                                        <input 
                                            type="text" 
                                            className="w-full p-2 border rounded-md" 
                                            placeholder="1234 5678 9012 3456"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Expiry Date</label>
                                            <input 
                                                type="text" 
                                                className="w-full p-2 border rounded-md" 
                                                placeholder="MM/YY"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">CVV</label>
                                            <input 
                                                type="text" 
                                                className="w-full p-2 border rounded-md" 
                                                placeholder="123"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <button
                                onClick={handleCheckout}
                                 className="mx-auto block w-1/2 bg-secondary text-white px-6 py-4 mb-8 mt-8 rounded-md hover:bg-secondary-dark transition-colors">
                        
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
