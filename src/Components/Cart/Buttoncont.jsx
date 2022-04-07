import React from 'react'
import { Button } from '@mui/material'
function Buttoncont({title,onClick}) {
  return (
    <Button sx={{backgroundColor:'#F43397',border:'none',padding:'10px' ,width:'100%',m:2}}
    variant="contained" onClick={onClick}>{title}</Button>
  )
}

export default Buttoncont