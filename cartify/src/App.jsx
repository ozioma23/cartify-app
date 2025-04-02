import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";  
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage";
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/Cart';

import './App.css'

function App() {
  const [cart, setCart] = useState([]);  

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
  };

  return (
    <> 
      <UserContextProvider>  
        <Router>  
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/buy" element={<HomePage cart={cart} addToCart={addToCart} />} />
            <Route path="/sell" element={<div>Sell Page (Coming Soon)</div>} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/Cart" element={<CartPage cart={cart} />} />  
          </Routes>
        </Router>
      </UserContextProvider>   
    </>
  );
}

export default App;