import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Products from "../Products/Products";
import { ProductS } from "../Products/Productss";
import Product from "../Product/Product";
import Checkout from "../Checkout/Checkout";
import Cart from "../Cart/Cart";
import Address from "../Address/Address";
import Payment from "../Payment/Payment";
import Summary from "../Summary/Summary";
import Profile from "../Profile/Profile";
import Login from "../Profile/Login";
import Supplier from "../Supplier/Supplier";
import Footer from "../Footer/Footer";
import { StartSelling } from "../Supplier/StartSelling";
import StartSellingLogin from "../Supplier/StartSelling_LoginPage";
export default function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:type" element={<Products />} />
        <Route path="/products/:type/:subtype" element={<ProductS />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/supplier" element={<Supplier />} />
          <Route path="/StartSelling" element={<StartSelling />} />
            <Route path="/StartSellingLogin" element={<StartSellingLogin />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/checkout/cart"
          element={
            <>
              <Checkout />
              <Cart />
            </>
          }
        />
        <Route
          path="/checkout/address"
          element={
            <>
              <Checkout />
              <Address />
            </>
          }
        />
        <Route
          path="/checkout/payment"
          element={
            <>
              <Checkout />
              <Payment />
            </>
          }
        />
        <Route
          path="/checkout/summary"
          element={
            <>
              <Checkout />
              <Summary />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
