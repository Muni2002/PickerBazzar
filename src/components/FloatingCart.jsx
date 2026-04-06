import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function FloatingCart({ onClick }) {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,0);

  return (
    <div
      onClick={onClick} // 👈 ADD THIS
      style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "#0f9d58",
        color: "white",
        padding: "15px",
        borderRadius: "12px",
        width: "140px",
        textAlign: "center",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      <div>🛒 {cart.length} Items</div>
      <div>${total.toFixed(2)}</div>
    </div>
  );
}

export default FloatingCart;