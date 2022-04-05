import { Button } from "@mui/material";
import React from "react";
import styles from '../allstyles.module.css'
import ProductPricing from "./ProductPricing";
export default function Cart() {
  return (
    <div className={styles.cartDiv}>
      <div className={styles.cartSec}>
        <div className={styles.cartLeftp1}>
         Cart | 1 item   
        </div>
        <div>
          Ayush
      </div>
      </div>
      {/* <hr /> */}
     <ProductPricing/>
    </div>
  )
}

