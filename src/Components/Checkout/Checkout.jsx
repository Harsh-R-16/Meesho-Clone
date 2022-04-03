import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div>
      <Link to="/checkout/cart">Cart</Link>
      <Link to="/checkout/address">Address</Link>
      <Link to="/checkout/payment">Payment</Link>
      <Link to="/checkout/summary">Summary</Link>
    </div>
  );
}
