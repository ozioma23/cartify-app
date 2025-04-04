# cartify-app

Cartify-App is a simple e-commerce prototype that allows users to browse products, view product details, add items to a cart, and proceed to a checkout summary. Built with **React + Vite**, it fetches product data from the **DummyJSON API**.

# Features

**Product Listing Page** – Displays products fetched from an API  
**Product Details Page** – View more details of a selected product  
**Cart Page** – Add/remove items, update quantity  
**Checkout Page (Mocked)** – Displays cart summary (no actual payment)  
 **Login Page (Optional)** – Mock login functionality  

# Tech Stack

**Frontend**: React + Vite  
**State Management**: React Context API  
**API**: DummyJSON API (for product data)  
**Styling**: Tailwind CSS  


# Folder Structure

cartify-app/
│── public/                     
│── src/                        
│   ├── components/             
│   ├── pages/                  
│   │   ├── Home.jsx            
│   │   ├── ProductDetails.jsx  
│   │   ├── Cart.jsx            
│   │   ├── Checkout.jsx        
│   │   ├── Login.jsx           
│   ├── context/               
│   │   ├── CartContext.jsx    
│   ├── api/                   
│   │   ├── productApi.js       
│   ├── App.jsx                
│   ├── main.jsx                
│── .gitignore                 
│── package.json                
│── vite.config.js              
│── README.md                  