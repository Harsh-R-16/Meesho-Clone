import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Products from "../Products/Products";
import { ProductS } from "../Products/Productss";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import Summary from "../Summary/Summary";
import Profile from "../Profile/Profile";
import Login from "../Profile/Login";
import Supplier from "../Supplier/Supplier";
import Footer from "../Footer/Footer";
import Checkout from "../Checkout/Checkout";

export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />

        <Route path="/products/:type" element={<Products />} />
        <Route path="/products/:type/:subtype" element={<ProductS />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/supplier" element={<Supplier />} />
      </Routes>
       
      <Routes>
      
         <Route path="/checkout/cart" element={<div><Checkout/><Cart /></div>} />
        <Route path="/checkout/address" element={<div><Checkout/><Address /></div>} />
        <Route path="/checkout/payment" element={<div><Checkout/><Payment /></div>} />
        <Route path="/checkout/summary" element={<div><Checkout/><Summary /></div>} />
      
      </Routes>
     
      <Footer />
    </>
  );
}
