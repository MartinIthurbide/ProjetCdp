import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
          <Button variant="h5" component="div" sx={{ flexGrow: 1 }} href='/'>
            Accueil
          </Button>
          <Button variant="h5" component="div" sx={{ flexGrow: 1 }} href="/backlog">
            BackLog
          </Button>
          <Button variant="h5" component="div" sx={{ flexGrow: 1 }} href="/sprint">
            Sprint
          </Button>
          <Button variant="h5" component="div" sx={{ flexGrow: 1 }} to="/about">
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
