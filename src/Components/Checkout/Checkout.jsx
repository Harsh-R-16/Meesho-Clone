
import { Link } from "react-router-dom";
import styles from '../allstyles.module.css'
import{ useSelector} from 'react-redux'

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Cart',
  'Address',
  'Payment',
  'Summary'
];



export default function Checkout() {

  // const [step, setStep] = React.useState(0)
  const step = useSelector((state) => state.step)
  console.log('step',step)
  return (
    <nav className={styles.checkoutNav}>
      {/* <div className={styles.logodiv}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanHWiaUeAdVsXoTyJgx8xwBmQgCim_MmBIxG3tUDmb05jRejI" height="130px"
          alt='logo' />
      </div> */}
       <Box className={styles.stepsbox}>
     <Stepper sx={{}} activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step sx={{}} key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    </nav>
   
  );
}
