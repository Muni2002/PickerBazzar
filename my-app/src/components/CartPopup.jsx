import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartPopup({ onClose }) {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "320px",
        height: "100vh",
        background: "white",
        padding: "20px",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
        zIndex: 9999,
        overflowY: "auto",
      }}
    >
      <h3>Cart</h3>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            borderBottom: "1px solid #eee",
            marginBottom: "10px",
            paddingBottom: "10px",
          }}
        >
          <p>{item.title}</p>
          <p>${item.price}</p>

          {/* Quantity Controls */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeItem(item.id)}
            style={{ color: "red", marginTop: "5px" }}
          >
            Remove
          </button>
        </div>
      ))}

      <h4>Total: ${total.toFixed(2)}</h4>

      <button onClick={() => navigate("/checkout")}>
        Checkout
      </button>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CartPopup;