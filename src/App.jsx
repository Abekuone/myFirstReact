// On fait l'importation des composants depuis le dossiers components
import { Titre } from "./components/Titre";
import { Description } from "./components/Description";


// Utilisation de nos composants dans notre fonction principale
export default function App(){
  return (
    <>
    {/*On appelle chaque composant par son nom dans une balise fermante*/}
    <Titre/>
    <Description/>
    </>
  );
}