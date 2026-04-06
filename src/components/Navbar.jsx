import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">PickBazar</div>
        <select>
          <option>Grocery</option>
        </select>
      </div>

      <div className="nav-links">
        <span>Shops</span>
        <span>Offers</span>
        <span>Contact</span>
        <span>Pages</span>
      </div>

      <div className="nav-right">
        <button>Join</button>
        <button className="primary-btn">Become a Seller</button>
        <span>Cart: {cart.length}</span>
      </div>
    </div>
  );
}

export default Navbar;