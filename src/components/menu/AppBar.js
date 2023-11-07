import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

import './ButtonAppBar.css';

export default function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        sx={{ 
            backgroundColor: '#2E3B55'

     }}  
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton> */}
          <Link to={'/'} className='buttonNavBar'>Accueil</Link>
          <Link to={'/backlog'} className='buttonNavBar'>BackLog</Link>
          <Link to={'/sprint'} className='buttonNavBar'>Sprint</Link>
          <Link to={'/about'} className='buttonNavBar'>About</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
