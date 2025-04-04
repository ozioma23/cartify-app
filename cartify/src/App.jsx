import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";  
import { SearchProvider } from "./context/SearchContext"; 
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkout';
import CartPage from './pages/Cart';
import DeliveryPage from './pages/DeliveryPages';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [message, setMessage] = useState("");  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });

  
    setMessage("Product added to cart!");

    
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <UserContextProvider>
      <SearchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/buy" element={<HomePage cart={cart} addToCart={addToCart} />} />
            <Route path="/sell" element={<div>Sell Page (Coming Soon)</div>} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
            <Route path="/deliveryPage" element={<DeliveryPage />} />
          </Routes>

          {message && (
            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
              {message}
            </div>
          )}
        </Router>
      </SearchProvider>
    </UserContextProvider>
  );
}

export default App;
