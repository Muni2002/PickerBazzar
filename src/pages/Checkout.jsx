import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Checkout;