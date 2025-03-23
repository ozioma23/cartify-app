import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";  
import LandingPage from "./pages/LandingPage"

import './App.css'

function App() {

  return (
    <> 
    <UserContextProvider>  
      <Router>  
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </UserContextProvider>   
    </>
  )
}

export default App
