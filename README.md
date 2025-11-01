# 🍽️ Food Delivery Admin Dashboard

A sleek and effective **Admin Dashboard** built with **React (Vite)** for a food-delivery backend — manage food items, categories and orders with ease.

---

## 🚀 Features

- **Add Food Items** – Upload images, set name, description, price and category.  
- **List Items** – View all food items, delete unwanted ones.  
- **Manage Orders** – See all orders, change status (Processing → Out for delivery → Delivered).  
- **Notifications** – Real-time feedback using React Toastify.  
- **Routing & State** – Powered by React Router v7 & Axios for API calls.

---

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite  
- **Routing**: React Router DOM v7  
- **HTTP Client**: Axios  
- **Notification System**: React-Toastify  
- **Backend (API)**: Node.js / Express (expects endpoint base URL like `http://localhost:4000`)  

---

## 📁 Project Structure

admin/
│
├── src/
│ ├── components/
│ │ ├── Navbar/
│ │ └── Sidebar/
│ ├── pages/
│ │ ├── Add/
│ │ ├── List/
│ │ └── Orders/
│ ├── assets/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
├── vite.config.js
└── README.md


---

## 🏁 Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/HamdiNur/food-del-admin.git
   cd food-del-admin


2. Install dependencies:
    npm install

3. Start the development server:
    npm run dev
4. For production build:
  npm run build


##   API Endpoints Used
Endpoint	       Method	 Description
/api/food/add	    POST	   Add a new food item
/api/food/list	    GET	       Fetch all food items
/api/food/remove	POST	   Remove a food item
/api/order/list	    GET	       Get all customer orders
/api/order/status	POST       Update order status

Important Notes

Ensure the backend API is running (default base URL: http://localhost:4000).

Image uploads are handled via FormData.

Use environment variables for URLs/configurations in production (.env file etc).