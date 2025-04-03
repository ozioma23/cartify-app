import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("cartifyUser");
    const savedGuest = localStorage.getItem("isGuest");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedGuest) {
      setIsGuest(JSON.parse(savedGuest));
    }
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
    setIsGuest(false);
    localStorage.setItem("cartifyUser", JSON.stringify(userData));
    localStorage.setItem("isGuest", JSON.stringify(false));
  };

  const logoutUser = () => {
    setUser(null);
    setIsGuest(false);
    localStorage.removeItem("cartifyUser");
    localStorage.removeItem("isGuest");
  };

  const continueAsGuest = () => {
    setUser(null);
    setIsGuest(true);
    localStorage.setItem("isGuest", JSON.stringify(true));
  };

  return (
    <UserContext.Provider value={{ user, isGuest, loginUser, logoutUser, continueAsGuest }}>
      {children}
    </UserContext.Provider>
  );
};