// Creation d'un composant Description qui sera utilisé plus tard
export function Description({avantages}){
  return(
    <div>
    <h2>Description</h2>
      <p>
        React est une bibliotheque Js cree par #Facebook.
      <h2>Avantages</h2>
      <ul>
        {
          avantages.map((avantage)=> <li key = {avantage.id}>
            {avantage.titre}
          </li>)
        }
      </ul>
      </p>
    </div>
    );
}