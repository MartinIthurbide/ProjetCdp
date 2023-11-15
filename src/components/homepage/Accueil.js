import React, { useState } from 'react';
import MyAppBar from '../menu/AppBar';
import ListOfProjets from "./ListOfProjets";
import './Accueil.css';

function Accueil({ addDynamicLink }) {

    return (
        <div>
            <div className="accueilTitre">
                <h1>Titre Appli</h1>
            </div>
            <div className="projects">
                <ListOfProjets addDynamicLink={addDynamicLink} />
            </div>
        </div>
    );
}

export default Accueil;