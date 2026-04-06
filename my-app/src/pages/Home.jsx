import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import FloatingCart from "../components/FloatingCart";
import CartPopup from "../components/CartPopup";
import "../App.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch products from mock API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div style={{ display: "flex" }}>
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          
          {/* Banner */}
          <div className="banner" style={{ marginBottom: "20px" }}>
            <img
              src="https://via.placeholder.com/1200x300"
              alt="banner"
            />
          </div>

          {/* Title */}
          <h2 style={{ marginBottom: "20px" }}>Products</h2>

          {/* Product Grid */}
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cart */}
      <FloatingCart onClick={() => setShowCart(true)} />

      {/* Cart Popup */}
      {showCart && (
        <CartPopup onClose={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default Home;