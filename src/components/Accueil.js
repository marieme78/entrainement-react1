import React from "react";
import '../App.css';
const Accueil = () => {
  return (
    <>
      {/* <div className="divprincipale">
        <div className="titre">
          <div>
            <h1 classname="titreprincipale">
              <b>Formez-vous aux</b>
            </h1>
            <h1 className="titreprincipale" id="métiers">
              <b> métiers de la Tech et</b>
            </h1>
            <h1 classname="titreprincipale" id="Digital">
              <b>du Digital</b>
            </h1>
          </div>
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Smiling-guy-1.png"
            alt=""
            classname="etudiant2"
          />
        </div>
        <div className="invit">
          <div className="inscristoi">
            <h1>
              Avec nos <br />
              formations <br />
              100% pratiques
            </h1>
            <img
              src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Arrow.png"
              alt="fleche"
              className="allez"
            />
          </div>
          <div className="inscristoi2">
            <h1>
              Obtenez les compétences les plus <br />
              recherchées sur le marché de
              <br />
              l’emploi aujourd’hui
            </h1>
            <button type="button" className="bobo">
              Je m'inscris
            </button>
          </div>
        </div>
        <img
          src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/flake-2.png"
          alt="image"
          className="flocon"
        />
      </div> */}

      <div style={{marginLeft:30,marginRight:30}} className="divprincipale">
      <div style={{display:"flex"}}>
      <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/12/Group-6907-4-1.png" className="etudiant1"></img>
      <div className="titreprincipale">
        <h1>Formez-vous aux métiers de la Tech et du Digital</h1>
      </div>
      <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Smiling-guy-1.png" className="etudiant2"></img>
      </div>
      <div>
      <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/12/Smiling-girl-1-1.png" className="etudiantbleu"></img>
      <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Group-6715-2-1.png" className="balise"></img>
      </div>
      <div style={{display:"flex"}} className="pratique">
        <h1>Avec nos <br></br> formation <br></br> 100% pratiques</h1>
        <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Arrow.png" className="fleche1"></img>
        <div>
        <h3>Obtenez les compétences les plus <br></br> 
        recherchées sur le marché de <br></br>
        l’emploi aujourd’hui</h3>
        <button className="bnt">Je m'inscris</button>
        </div>
      </div>
      <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/flake-2.png" className="flocon"></img>

      </div>
    </>
  );
};
export default Accueil;