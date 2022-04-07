import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseStep } from "../../Redux/action";
import styles from '../allstyles.module.css'

function ProductPricing({ title, handleClick }) {
  const dispatch=useDispatch()
    const navigate=useNavigate()
  return (
    <div className={styles.cartRightSide}>
    {/* <table className={styles.table}>
      <thead>
        <tr>
          <th>Price Details</th>
          <th></th>
        </tr>
       
      </thead>
      <tbody>
         <tr>
<td>Product Charges</td>
<td>₹100</td>
        </tr>
         <tr>
<td>Delivery Charges</td>
<td>₹100</td>
        </tr>
         <tr>
<td>COD Charges</td>
<td>₹100</td>
        </tr>
      </tbody>
    
      <tfoot>
        <tr>
          <th>Order Total</th>
          <th>₹300</th>
        </tr>
      </tfoot>
    </table> */}
    
    <Button sx={{backgroundColor:'#F43397',width:'300px',border:'none',padding:'10px' ,m:2}}
        variant="contained" onClick={handleClick}>{title}</Button>
          
          <img src="https://images.meesho.com/images/marketing/1588578650850.png" width="300px" alt="img"/>
  </div>
  )
}

export default ProductPricing