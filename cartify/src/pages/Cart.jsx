const CartPage = ({ cart }) => {
    return (
      <div className="relative">
        <div className="container mx-auto px-4 lg:px-20 lg:py- bg-primary text-white">
          <div className="cart-page">
            <h2 className="text-md md:text-xl lg:text-2xl text-left font-bold pt-8 pb-4">
              Your <span className="text-secondary">Cart</span>
            </h2>
  
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="lg:space-y-4 grid grid-cols-2 pb-12 gap-8 lg:grid-cols-1">
                {cart.map((product) => (
                  <li key={product.id} className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full p-4 border rounded-md relative shadow bg-white">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-40 h-30 object-cover"
                    />
  
                    <div className="flex-start flex-col space-y-2 text-left w-full">
                      <h3 className="font-semibold text-lg text-black">{product.title}</h3>
                      <p className="text-sm text-black">Quantity: {product.quantity}</p>
                      <p className="text-sm font-bold text-black">${product.price}</p>
                      <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default CartPage;