import { Button } from "@mui/material";
import React from "react";
import styles from '../allstyles.module.css'

function ProductPricing() {
  return (
    <div className={styles.cartRightSide}>
    <table className={styles.table}>
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
      <hr />
      <tfoot>
        <tr>
          <th>Order Total</th>
          <th>₹300</th>
        </tr>
      </tfoot>
    </table>
    
    <Button sx={{backgroundColor:'#F43397',border:'none',padding:'10px' ,width:'100%',m:2}}
    variant="contained">Continue</Button>
  </div>
  )
}

export default ProductPricing