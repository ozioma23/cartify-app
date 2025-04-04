import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductDetails from "./ProductDetails";

const HomePage = ({ cart, addToCart }) => {
    const [products, setProducts] = useState([]);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://dummyjson.com/products?limit=100");
                const data = await response.json();
                console.log("Fetched Data:", data);  
                setProducts(data.products || []);  
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = searchQuery
        ? products.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : products;

    const categories = {
        "Trending": filteredProducts.slice(0, 10),
        "Phones & Gadgets": filteredProducts.filter(p => ["smartphones", "laptops"].includes(p.category)),
        "Food & Agriculture": filteredProducts.filter(p => ["groceries"].includes(p.category)),
        "Fashion & Accessories": filteredProducts.filter(p => ["fragrances", "skincare"].includes(p.category)),
    };

   
    const handleAddToCart = (product, quantity = 1) => {
      addToCart(product, quantity);
    };

    return (
        <div className="overflow-auto lg:overflow-hidden sm:overflow-visible w-full sm:w-full md:w-full lg:w-full min-h-screen relative">
            <div className="container mx-auto px-4 lg:px-20 py-8 lg:py-8 bg-primary text-white">
                <Navbar cart={cart} /> 

                {loading ? <p>Loading products...</p> : (
                    Object.keys(categories).map((categoryName, index) => {
                        const isExpanded = expandedCategories[categoryName] || false;
                        const visibleProducts = isExpanded ? categories[categoryName] : categories[categoryName].slice(0, 4);

                        return (
                            <div key={index} className="mb-8 text-left">
                                <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>

                                <ul className="lg:space-y-4 grid grid-cols-2 gap-4 lg:grid-cols-1">
                                    {categories[categoryName].length > 0 ? (
                                        visibleProducts.map((product) => (
                                            <li
                                                key={product.id}
                                                className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full p-4 border rounded-md shadow bg-white"
                                                onClick={() => setSelectedProduct(product)}
                                            >
                                                <img
                                                    src={product.thumbnail}
                                                    alt={product.title}
                                                    className="lg:w-32 lg:h-32 object-cover rounded-md mx-auto md:mx-0 md:mr-4"
                                                />

                                                <div className=" w-28 h-18 flex flex-col justify-between flex-grow">
                                                    <div>
                                                        <h3 className="font-semibold text-lg text-black">{product.title}</h3>
                                                        <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
                                                        <p className="text-black font-bold">${product.price}</p>
                                                        <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
                                                        <p className="text-yellow-500 text-sm mb-2">⭐ {product.rating}</p>
                                                    </div>

                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation(); 
                                                            handleAddToCart(product);
                                                        }}
                                                        className="mt-2 md:mt-auto md:self-start px-4 py-2 border border-secondary text-black  text-sm rounded-md hover:border-secondary hover:bg-secondary hover:text-white"
                                                    >
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </li>
                                        ))
                                    ) : (
                                        <p className="text-gray-400">No products found.</p>
                                    )}
                                </ul>

                                {categories[categoryName].length > 4 && (
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() =>
                                                setExpandedCategories(prev => ({
                                                    ...prev,
                                                    [categoryName]: !prev[categoryName],
                                                }))
                                            }
                                            className="mt-4 px-4 py-2 text-white rounded-md hover:text-fadedGrey"
                                        >
                                            {isExpanded ? "See Less" : "See More"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            {selectedProduct && (
                <ProductDetails 
                  selectedProduct={selectedProduct} 
                  setSelectedProduct={setSelectedProduct} 
                  addToCart={handleAddToCart} 
                />
            )}
        </div>
    );
};

export default HomePage;
