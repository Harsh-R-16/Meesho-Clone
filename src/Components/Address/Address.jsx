import React from "react";
import ProductPricing from "../Cart/ProductPricing";
import AddressForm from "./AddressForm";
import styles from '../allstyles.module.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increaseStep } from "../../Redux/action";
export default function Address() {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const handleClick = (e) => {
    dispatch(increaseStep())
    navigate('/checkout/payment')
  }
  return <div className={styles.address}>

  
    <AddressForm />

    <hr style={{margin:'0px 30px', color:'#666666'}} />
    <ProductPricing title='Save Address and Continue' handleClick={handleClick}/>
  </div>;
  
}
