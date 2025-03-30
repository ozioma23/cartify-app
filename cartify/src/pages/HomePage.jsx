import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("Trending");
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedCategories, setExpandedCategories] = useState({});
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://dummyjson.com/products?limit=100");
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);  
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const categories = {
        "Trending": filteredProducts.slice(0, 10),
        "Phones & Gadgets": filteredProducts.filter(p => ["smartphones", "laptops"].includes(p.category)),
        "Food & Agriculture": filteredProducts.filter(p => ["groceries"].includes(p.category)),
        "Fashion & Accessories": filteredProducts.filter(p => ["fragrances", "skincare"].includes(p.category)),
    };

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} added to cart!`);
    }

    return (
        <div className="container mx-auto px-20 py-8 bg-primary text-white">
             <Navbar onSearch={setSearchQuery} />
            {Object.keys(categories).map((category, index) => {
                const isExpanded = expandedCategories[category] || false;
                const visibleProducts = isExpanded ? categories[category] : categories[category].slice(0, 3);

                return (
                    <div key={index} className="mb-8 text-left">
                        <h2 className="text-2xl font-bold mb-4">{category}</h2>

                        {/* Product List */}
                        <ul className="space-y-4">
                            {categories[category].length > 0 ? (
                                visibleProducts.map((product) => (
                                    <li key={product.id} className="flex items-center space-x-8 p-8 border rounded-md shadow bg-white">

                                        <img src={product.thumbnail} alt={product.title} className="w-36 h-36 object-cover rounded-md" />

                                        {/* Product Details */}
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold text-lg text-black">{product.title}</h3>
                                            <p className="text-sm text-gray-600">{product.description}</p>
                                            <p className="text-black font-bold">${product.price}</p>
                                            <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
                                            <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
                                            <div className="flex items-start">
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    className="flex items-start mt-2 px-4 py-2 border border-secondary text-black rounded-md hover:border-secondary hover:bg-secondary hover:text-white"
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-400">No products found.</p>
                            )}
                        </ul>


                        {categories[category].length > 4 && (
                            <div className="flex justify-end">
                                <button
                                    onClick={() =>
                                        setExpandedCategories(prev => ({
                                            ...prev,
                                            [category]: !prev[category],
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
            })}
        </div>
    );
};
export default HomePage
