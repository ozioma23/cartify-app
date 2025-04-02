const CartPage = ({ cart }) => {  // <--- Added 'cart' as a prop

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-8 md:px-12 lg:px-24 bg-primary text-white">
                <div className="flex flex-col text-center lg:text-left lg:p1-12 w-full lg:w-1/2">
                    <div className="">
                        <img
                            src="/shapes/irregular1.svg"
                            alt="Irregular Shape 1"
                            className="absolute top-[-30px] lg:top-[20px] left-0 sm:left-[-15px] w-[300px] h-[250px] sm:w-[400px] sm:h-[350px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[500px] pointer-events-none"
                        />

                        <img
                            src="/shapes/irregular2.svg"
                            alt="Irregular Shape 2"
                            className="absolute bottom-[-200px] md:bottom-[-20px] right-0 w-[300px] h-[250px] sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[350px] lg:w-[450px] lg:h-[400px] pointer-events-none"
                        />
                    </div>
                    <div className="cart-page">
                        <h2>Your Cart</h2>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <ul>
                                {cart.map((product) => (
                                    <li key={product.id}>
                                        <img src={product.thumbnail} alt={product.title} />
                                        <h3>{product.title}</h3>
                                        <p>Quantity: {product.quantity}</p>
                                        <p>${product.price * product.quantity}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;