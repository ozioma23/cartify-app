  Cartify-App

Cartify-App is a simple e-commerce prototype that allows users to browse products, view product details, add items to a cart, and proceed to a checkout summary. Built with React + Vite, it fetches product data from the DummyJSON API.

# Features

Product Listing Page – Displays products fetched from an API  
Product Details Page – View more details of a selected product  
Cart Page – Add/remove items, update quantity  
Checkout Page (Mocked) – Displays cart summary (no actual payment)  
Login Page (Optional) 

# Tech Stack

Frontend: React + Vite  
State Management: React Context API  
API: DummyJSON API (for product data)  
Styling: Tailwind CSS  

 # Folder Structure

cartify-app/
│── public/                     # Static assets (logos, icons, etc.)
│── src/                        # Source code
│   ├── components/             # Reusable UI components (Navbar, ProductCard, etc.)
│   ├── pages/                  # Individual pages of the app
│   │   ├── Landing.jsx         # Landing page (welcomes users, directs to login)
│   │   ├── Home.jsx            # Product listing page
│   │   ├── ProductDetails.jsx  # Product details page
│   │   ├── Cart.jsx            # Shopping cart page
│   │   ├── Checkout.jsx        # Checkout summary page
│   │   ├── Login.jsx           # Login page (optional)
│   ├── context/                # Global state management (cart context)
│   │   ├── CartContext.jsx     # Manages cart state
│   ├── api/                    # API calls and data fetching
│   │   ├── productApi.js       # Fetching product data from DummyJSON API
│   ├── App.jsx                 # Main component that handles routes
│   ├── main.jsx                # Entry point, renders App.jsx
│── .gitignore                  # Ignore unnecessary files (e.g., node_modules)
│── package.json                # Project dependencies & scripts
│── vite.config.js              # Vite configuration
│── README.md                   # Project overview, setup, usage instructions