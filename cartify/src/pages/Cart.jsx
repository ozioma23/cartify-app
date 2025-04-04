import { useNavigate } from "react-router-dom";
import BackButton from '../components/BackButton';

const CartPage = ({ cart, setCart }) => {
    const navigate = useNavigate();

    return (
        <div className="overflow-auto lg:overflow-hidden sm:overflow-visible w-screen min-h-screen relative m-0 p-0">
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8 bg-primary text-white">
               
                <div className="flex items-center mb-4">
                    <BackButton />
                    <h2 className="text-md md:text-xl lg:text-2xl text-left font-bold">
                        Your <span className="text-secondary">Cart</span>
                    </h2>
                </div>


                {cart.length === 0 ? (
                    <p className="text-lg text-center">Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="lg:space-y-4 grid-cols-1 pb-8 gap-8 lg:grid-cols-1">
                            {cart.map((product) => (
                                <li key={product.id} className="flex flex-row lg:flex-row items-center lg:items-start justify-between lg:p-4 h-full border rounded-md relative mb-4 shadow bg-white">
                                    <img src={product.thumbnail} alt={product.title} className="w-40 h-30 object-cover" />
                                    <div className="flex flex-col space-y-2 text-left w-full pb-4">
                                        <h3 className="font-semibold text-lg text-black">{product.title}</h3>
                                        <p className="text-sm text-black">Quantity: {product.quantity}</p>
                                        <p className="text-sm font-bold text-black">${product.price}</p>
                                        <p className="text-gray-500 text-sm">Brand: {product.brand}</p>

                                        <div className="flex justify-start"> 
                                            <button
                                                onClick={() => setCart(prevCart => prevCart.filter(p => p.id !== product.id))}
                                                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-end mt-4 ">
                            <button
                                onClick={() => navigate("/checkout")}
                                className="mx-auto block lg:w-1/2 bg-secondary text-white px-6 py-4 mb-8 rounded-md hover:bg-opacity-80"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;
