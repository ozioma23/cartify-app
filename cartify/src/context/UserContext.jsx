import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

 export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);

  // Load user from localStorage (if already logged in)
  useEffect(() => {
    const savedUser = localStorage.getItem("cartifyUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save user to localStorage when they log in
  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("cartifyUser", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("cartifyUser");
  };

  const continueAsGuest = () => {
    setIsGuest(true);
  };

  return (
    <UserContext.Provider value={{ user, isGuest, loginUser, logoutUser, continueAsGuest }}>
      {children}
    </UserContext.Provider>
  );
};