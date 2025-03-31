import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";  
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage";
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';

import './App.css'

function App() {

  return (
    <> 
    <UserContextProvider>  
      <Router>  
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/buy" element={<HomePage />} />  
          <Route path="/sell" element={<div>Sell Page (Coming Soon)</div>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </UserContextProvider>   
    </>
  )
}

export default App