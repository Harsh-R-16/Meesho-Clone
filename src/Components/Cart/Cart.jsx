import { Button } from "@mui/material";
import React from "react";
import styles from '../allstyles.module.css'
import CartItem from "./CartItem";
import ProductPricing from "./ProductPricing";
import { allProducts } from "../../AllProducts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseStep } from "../../Redux/action";
export default function Cart() {
  const cart = localStorage.getItem('cart')
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const handleClick = (e) => {
    dispatch(increaseStep())
    navigate('/checkout/address')
  }
  console.log("cart->", cart)
  return (
    <div className={styles.cartDiv}>
      <div className={styles.cartSec}>
        <div className={styles.cartLeftp1}>
        <strong> Cart </strong>   | 1 item   
        </div>
      <CartItem/>
      </div>
      <hr style={{margin:'0px 20px'}} />
      <ProductPricing title='Continue' handleClick={handleClick} />
      
    </div>
  )
}

