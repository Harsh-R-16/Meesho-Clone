import React from 'react'
import styles from '../allstyles.module.css'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ProductPricing from '../Cart/ProductPricing';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increaseStep } from '../../Redux/action';
function Payment() {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const handleClick = (e) => {
    dispatch(increaseStep())
    navigate('/checkout/summary')
  }
  return (
    <div className={styles.paymentDiv}>
      <div className={styles.pay1}>
        <h4>Payment Method</h4>
        <div className={styles.payMiddle}>
          <LocalAtmIcon sx={{color:'green'}} />
          <h3>Cash On Delivery</h3>
          <CheckCircleIcon sx={{color:'green'}}/>
        </div>
      </div>
      <hr style={{margin:'0px 30px', color:'#666666'}} />
      <ProductPricing title=' Continue' handleClick={handleClick}/>
    </div>
  )
}

export default Payment