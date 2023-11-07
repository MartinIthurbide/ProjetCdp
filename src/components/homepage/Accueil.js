import listOfProjet from "./ListOfProjets";
import './Accueil.css';

function Accueil () {
    return (
    <div className="projects">
        {listOfProjet()}
    </div>
    );
}

export default Accueil;