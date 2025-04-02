import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar =  ({ cart }) => {
    const cartItemCount = cart.length;
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "border-b-2 border-secondary" : "text-gray-300";

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchParams(query ? { search: query } : {});
    };

    return (
        <nav className="flex flex-col md:flex-row items-center justify-between mb-8 mt-4">

            <Link to="/">
                <img src="/Images/cartify logo.png" alt="Cartify Logo" className="w-32" />
            </Link>

            <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
                <input
                    type="text"
                    placeholder="Search by products or categories"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-2 pl-10 pr-4 rounded-full border text-black"
                />
                <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
                </svg>
            </div>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <Link to="/buy" className={`hover:text-white pb-1 ${isActive("/buy")}`}>
                    Buy
                </Link>
                <Link to="/sell" className={`hover:text-white pb-1 ${isActive("/sell")}`}>
                    Sell
                </Link>
                <Link to="/cart" className="flex items-center space-x-2">
                    <img src="/Images/cart.png" alt="Cart" className="w-6 h-6" />
                    {cartItemCount > 0 && (
          <span className="cart-badge">{cartItemCount}</span> 
        )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;