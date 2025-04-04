// src/components/ShopLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ShopLayout = ({ cart }) => {
  return (
    <>
      <Navbar cart={cart} />
      <Outlet />
    </>
  );
};

export default ShopLayout;
