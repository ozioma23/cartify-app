import { useEffect, useState } from "react";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("Trending");
    const [searchQuery, setSearchQuery] = useState("");
    const [expandedCategories, setExpandedCategories] = useState({}); 

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=100")
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    const filteredProducts = searchQuery
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : products;

    // Categorizing products
    const categories = {
        "Trending": products.slice(0, 10),
        "Phones & Gadgets": products.filter(p => ["smartphones", "laptops"].includes(p.category)),
        "Food & Agriculture": products.filter(p => ["groceries"].includes(p.category)),
        "Fashion & Accessories": products.filter(p => ["fragrances", "skincare"].includes(p.category)),
    };

    return (
        <div className="container mx-auto px-20 py-8 bg-primary text-white">
            <div className="flex items-center  mb-4">
    <img src="/Images/cartify logo.png" alt="Cartify Logo" className="w-32" />

    <input
        type="text"
        placeholder="Search by products or categories"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-1/2 p-2 pl-4 ml-8 rounded-lg border text-black"
    />
</div>
            {/* Display Categories & Products */}
            {Object.keys(categories).map((category, index) => {
                const isExpanded = expandedCategories[category] || false; 
                const visibleProducts = isExpanded ? categories[category] : categories[category].slice(0, 5); 

                return (
                    <div key={index} className="mb-8 text-left">
                        <h2 className="text-2xl font-bold mb-4">{category}</h2>

                        {/* Product List */}
                        <ul className="space-y-4">
                            {categories[category].length > 0 ? (
                                visibleProducts.map((product) => (
                                    <li key={product.id} className="flex items-center space-x-8 p-8 border rounded-md shadow bg-white">
                                       
                                        <img src={product.thumbnail} alt={product.title} className="w-24 h-20 object-cover rounded-md" />

                                        {/* Product Details */}
                                        <div className="flex flex-col">
                                            <h3 className="font-semibold text-lg text-black">{product.title}</h3>
                                            <p className="text-sm text-gray-600">{product.description}</p>
                                            <p className="text-black font-bold">${product.price}</p>
                                            <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
                                            <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-400">No products found.</p>
                            )}
                        </ul>


                        {categories[category].length > 3 && (
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
