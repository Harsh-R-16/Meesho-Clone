import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CartItem from './CartItem';

export default function Drawer() {
  const [state, setState] = React.useState({

    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
   <h4 style={{margin:'20px'}}>Edit Item</h4>
          <Divider />
          <CartItem />
          <Divider/>
          <Button sx={{ 
              backgroundColor: '#F43397',
              width: "80%",
              marginLeft: '40px',
              marginTop:'20px'
              
          }} variant="contained">
              Save Changes
          </Button>
      </Box>
      
  );

  return (
    <div>
      {
        <React.Fragment >
          <Button sx={{color:'#F43397',marginTop: '-40px',fontWeight:'700px'}} onClick={toggleDrawer('right', true)}>Edit</Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
