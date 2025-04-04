 # Cartify-App

Cartify is a modern e-commerce web application built with React and Vite. It provides users with a seamless shopping experience, including product browsing, detailed product views, cart management, and a smooth checkout process. Users can also log in or continue as guests.


# Features
Landing Page: Welcomes users and directs them to login or shop as a guest.
Product Listing: Displays products fetched from an API.
Product Details: Provides detailed information about each product.
Shopping Cart: Allows users to add/remove products and view their cart.
Checkout Page: Summarizes order details before purchase.
Delivery Page: Handles shipping details and order confirmation.
Authentication: Users can log in or continue as guests.
Global State Management: Context API is used for cart, user, and search functionality.
Responsive UI: Ensures smooth performance on all devices.


# Tech Stack

Frontend: React + Vite  
State Management: React Context API  
API: DummyJSON API (for product data)  
Styling: Tailwind CSS 
Navigation: React Router 

 # Folder Structure

cartify-app/
│── public/                     # Static assets (logos, icons, etc.)
│── src/                        # Source code
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── BackButton.jsx      # Back button icon 
│   │   ├── ProductCard.jsx     # Product card component
│   ├── pages/                  # Individual pages of the app
│   │   ├── Landing.jsx         # Landing page (welcomes users, directs to login)
│   │   ├── Home.jsx            # Product listing page
│   │   ├── ProductDetails.jsx  # Product details page
│   │   ├── Cart.jsx            # Shopping cart page
│   │   ├── Checkout.jsx        # Checkout summary page
│   │   ├── Delivery.jsx        # Delivery and shipping details page
│   │   ├── Login.jsx           # Login page (optional)
│   ├── context/                # Global state management
│   │   ├── CartContext.jsx     # Manages cart state
│   │   ├── UserContext.jsx     # Handles user authentication and guest login
│   │   ├── SearchContext.jsx   # Manages search functionality
│   ├── api/                    # API calls and data fetching
│   │   ├── productApi.js       # Fetching product data from DummyJSON API
│   ├── App.jsx                 # Main component that handles routes
│   ├── main.jsx                # Entry point, renders App.jsx
│── .gitignore                  # Ignore unnecessary files (e.g., node_modules)
│── package.json                # Project dependencies & scripts
│── vite.config.js              # Vite configuration
│── README.md                   # Project overview, setup, usage instructions

# How to Install and Run the Project

Follow these steps to get *Cartify* running locally on your machine:

1. Clone the Repository

git clone https://github.com/your-username/cartify-app.git
cd cartify-app
2. Install Dependencies
Make sure you have Node.js installed, then run:
npm install

3. Start the Development Server
npm run dev
This will start the app on http://localhost:5173 (or the port Vite assigns).

4. Build for Production (Optional)
To create a production-ready build:
npm run build

To preview the build:
npm run preview
