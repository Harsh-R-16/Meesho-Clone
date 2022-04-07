import React from 'react'
import { useState } from 'react'
import styles from "../allstyles.module.css"
import Drawer from './Drawer'
function CartItem({data}) {
const [qty,setQty]=useState(1)
  const handleClick = () => {
    
  }
  return (
    <div className={styles.itemDiv} >
      <img src="https://images.meesho.com/images/products/30839757/fqcds_512.jpg" alt="product"  height="75px" width="60px"   />
      <div className={styles.middleItemDiv}>
        <h4>Ethnics</h4>
        <p>Quantity :{qty}</p>
        <p>₹2000</p>
     
        <div>Supplier : Pathan Brothers</div>
      </div>

      {/* <h4 onClick={handleClick} style={{ color: '#F43397', marginTop: '-40px' }}>EDIT</h4> */}
      
      <Drawer/>
    </div>
  )
}

export default CartItem