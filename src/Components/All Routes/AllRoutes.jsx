import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Product from "../Product/Product";
import Checkout from "../Checkout/Checkout";
import Cart from "../Cart/Cart";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import Summary from "../Summary/Summary";
import Profile from "../Profile/Profile";
import Supplier from "../Supplier/Supplier";
import Footer from "../Footer/Footer";

export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/supplier" element={<Supplier />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/cart" element={<Cart />} />
        <Route path="/checkout/address" element={<Address />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/summary" element={<Summary />} />
      </Routes>
      <Footer />
    </>
  );
}
