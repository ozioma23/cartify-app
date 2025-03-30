import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value); 
    };
    return (
        <nav className="flex justify-between">
            <Link to="/">
                <img src="/Images/cartify logo.png" alt="Cartify Logo" className="w-32" />
            </Link>

            
                <input
    type="text"
    placeholder="search by products or categories"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-1/2 p-2 pl-4 ml-8 text-black rounded-full"
 />

            <div className="flex items-center space-x-6">
                <Link to="/buy" className="hover:text-gray-300">Buy</Link>
                <Link to="/sell" className="hover:text-gray-300">Sell</Link>

                <Link to="/cart" className="flex items-center space-x-2">
                    <img src="/Images/cart.png" alt="Cart" className="w-6 h-6" />
                    <span>Cart</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
