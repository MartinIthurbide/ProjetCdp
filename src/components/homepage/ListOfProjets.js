import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
const style = {
    width: '100%',
    bgcolor: '#2E3B55'
  };

  export default function listOfProjet(){
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
            <ListItemText primary="Projet 1 : Refont site web..." />
        </ListItem>
        <Divider />
        <ListItem button divider>
            <ListItemText primary="Projet 2 : Modern Warfare 4" />
        </ListItem>
        </List>
    );
        
}