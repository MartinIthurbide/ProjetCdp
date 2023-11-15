import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

import {Link} from 'react-router-dom';

const style = {
  width: '100%',
  bgcolor: '#2E3B55'
};

function ListOfProjets({ addDynamicLink }){

    const predefinedLinks = [
        { key: 'backlog', to: '/backlog', label: 'BackLog' },
        { key: 'sprint', to: '/sprint', label: 'Sprint' },
        { key: 'about', to: '/about', label: 'About' },
        ];


  const [projets, setProjets] = useState([
    ["projet"+1,"Projet 1 : Refont site web..."],
    ["projet"+2,"Projet 2 : Modern Warfare 4"]
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [nouveauProjetNom, setNouveauProjetNom] = useState("");
  const [linksAdded, setLinksAdded] = useState(false);

  const ouvrirDialog = () => {
    setOpenDialog(true);
  };

  const fermerDialog = () => {
    setOpenDialog(false);
  };

  const ajouterProjet = () => {
    const nouveauProjet = ["projet"+(projets.length)+1,`Projet ${(projets.length)+1} : ${nouveauProjetNom}`];
    setProjets([...projets, nouveauProjet]);
    fermerDialog();
  };

  const handleChangeNomProjet = (e) => {
    setNouveauProjetNom(e.target.value);
  };

  const afficherMenu = () => {
        if (!linksAdded) { //TODO: il faut trouver un moyen pour remplacer et pas ne pas ajouter
            const newLinks = predefinedLinks.map((link) => (
                <Link key={link.key} to={link.to} className='buttonNavBar'>
                {link.label}
                </Link>
            ));
            addDynamicLink(newLinks);
        }
        setLinksAdded(true);
    }; 


  const renderDialog = () => {
    return (
      <Dialog open={openDialog} onClose={fermerDialog}>
        <DialogTitle>Ajouter un nouveau projet</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomProjet"
            label="Nom du projet"
            type="text"
            fullWidth
            onChange={handleChangeNomProjet}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={fermerDialog}>Annuler</Button>
          <Button onClick={ajouterProjet}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    );

  };
  return (
    <div>
      <List sx={style} component="nav" aria-label="mailbox folders">
        {projets.map((projet, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={afficherMenu}>
              <ListItemText primary={projet[1]} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Button variant="contained" onClick={ouvrirDialog}>Ajouter un projet</Button>
      {renderDialog()}
    </div>
  );
};

export default ListOfProjets;
