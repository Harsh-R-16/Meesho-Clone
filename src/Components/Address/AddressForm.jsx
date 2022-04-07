import React from 'react'
import { useState } from 'react'
import styles from '../allstyles.module.css'
import PhoneIconOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import TextField from '@mui/material/TextField';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
function AddressForm() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        phone: "",
        location: "",
        pin_code: "",
        city: "",
        state: ""
        
    })
    const {name,phone,location,pin_code,city,state}=formDetails
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setFormDetails(
            {
                ...formDetails,
                [name]:value
            }
        )
    }
  return (
      <div>
          <h4 style={{marginLeft:'20px'}}>Select Delivery Address</h4>
          <div className={styles.form}>
              
       
              <div className={styles.addressHead}>
                  <PhoneIconOutlinedIcon sx={{color:'#E93599',marginRight:'15px'}}/> 
                  <h2>Contact Details</h2>    
              </div>
              <TextField sx={{margin:'15px'}}  className={styles.input} id="standard-basic" variant="standard"
                  value={name}
                  name='name'
                  onChange={handleChange}
             placeholder="Name" 
              />
              <TextField sx={{margin:'15px'}}  className={styles.input} id="standard-basic" variant="standard"
                  value={phone}
                  name='phone'
                  onChange={handleChange}
             placeholder="Phone" 
              />
 <div className={styles.addressHead}>
                  <LocationOnOutlinedIcon sx={{color:'#E93599',marginRight:'15px'}} /> 
                  <h2>Adress Details</h2> 
                
              </div>
              <TextField sx={{margin:'15px'}}  className={styles.input} id="standard-basic" variant="standard"
                  value={location}
                  name='location'
                  onChange={handleChange}
             placeholder="House No. /Building Name" 
              />
              <TextField sx={{margin:'15px'}}  className={styles.input} id="standard-basic" variant="standard"
                  value={pin_code}
                  name='pin_code'
                  onChange={handleChange}
             placeholder="Pin Code" 
              />

              <div className={styles.cityDiv}>
              <TextField sx={{margin:'15px'}}  className={styles.input} id="standard-basic" variant="standard"
                  value={city}
                  name='city'
                  onChange={handleChange}
             placeholder="City" 
                  />
                   <TextField sx={{margin:'15px'}}  className={styles.input} id="standard-basic" variant="standard"
                  value={state}
                  name='state'
                  onChange={handleChange}
             placeholder="State" 
              />
              </div>
          </div> 
          
    </div>
  )
}

export default AddressForm