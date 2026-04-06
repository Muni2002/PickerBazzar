# 🛒 PickBazar Clone (React E-commerce UI)

## 📌 Project Overview

This project is a **frontend e-commerce application** built using **React.js** that replicates a grocery shopping UI similar to PickBazar.

The application allows users to browse products, add items to the cart, manage quantities, and proceed to checkout with selected product details.

---

## 🚀 Features

* 🏠 **Home Page UI**

  * Navbar, Sidebar (Categories), Banner
  * Product listing in grid layout

* 📦 **Product Listing**

  * Fetched from mock API (`dummyjson`)
  * Dynamic rendering using React hooks

* 🛒 **Cart System**

  * Add to cart
  * Increase / decrease quantity
  * Remove items
  * Real-time total calculation

* 📌 **Floating Cart**

  * Fixed position cart summary
  * Displays total items and price

* 🧾 **Cart Popup**

  * Shows selected products
  * Quantity controls (+ / -)
  * Remove item option

* 💳 **Checkout Page**

  * Displays selected items
  * Shows total price
  * Data shared via Context API

---

## 🧠 Concepts Used

* React Functional Components
* React Hooks (`useState`, `useEffect`, `useContext`)
* Context API (Global State Management)
* Component-based Architecture
* Conditional Rendering
* CSS Styling (Custom UI)

---

## 🌐 API Used

* Mock API: https://dummyjson.com/products

---

## 📁 Project Structure

```bash
src/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── Sidebar.jsx
 │     ├── ProductCard.jsx
 │     ├── FloatingCart.jsx
 │     ├── CartPopup.jsx
 │
 ├── pages/
 │     ├── Home.jsx
 │     ├── Checkout.jsx
 │
 ├── context/
 │     ├── CartContext.jsx
 │
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to project:

```bash
cd PickerBazzar
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm run dev
```

---

## 🎯 Key Highlights

* Clean and modular React architecture
* Real-world cart logic (quantity + remove)
* Responsive layout structure
* Beginner to intermediate level project

---

## 📸 Screenshots
<img width="1920" height="1080" alt="Screenshot (161)" src="https://github.com/user-attachments/assets/bdc3c1ee-f9c3-48fe-8634-92633b436fc8" />
<img width="1920" height="1080" alt="Screenshot (162)" src="https://github.com/user-attachments/assets/cf7906fc-817e-45dc-a1b1-12eb47b2081f" />
<img width="1920" height="1080" alt="Screenshot (163)" src="https://github.com/user-attachments/assets/aa1f202d-54fe-4286-8559-8fbbb3f4502f" />



---

## 📌 Future Improvements

* Add authentication (Login/Register)
* Integrate real backend (Node.js / Firebase)
* Add payment gateway
* Improve UI with Tailwind CSS
* Make fully responsive for mobile devices

---

## 👨‍💻 Author

Developed by [Muniyandi C]

---

## ⭐ If you like this project, give it a star!
