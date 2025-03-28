import { useEffect, useState } from "react";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("Trending");

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=100")  
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);

    const fetchAllProducts = async () => {
        let allProducts = [];
        let skip = 0;
        let limit = 30; 
    
        while (true) {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await response.json();
            
            allProducts = [...allProducts, ...data.products];
    
            if (data.products.length < limit) break; 
            skip += limit; 
        }
    
        setProducts(allProducts);
    };
    
   
};

export default HomePage;