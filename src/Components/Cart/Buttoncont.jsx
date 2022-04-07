import React from 'react'
import { Button } from '@mui/material'
function Buttoncont({title,onClick}) {
  return (
    <Button sx={{backgroundColor:'#F43397',border:'none' ,width:'90%',margin:'20px 40px'}}
    variant="contained" onClick={onClick}>{title}</Button>
  )
}

export default Buttoncont