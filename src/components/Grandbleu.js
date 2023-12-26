import React from "react";
const Grandbleu = () => {
  return (
    <>
        <div className="grandbleu">
      <div className="sousgranbleu">
        <h1 className="titreprogramme">Formez-vous aux métiers de demain !</h1>
        <div className="programme">
          <p>
            Choisissez l'un de nos programmes de formation élaborés par des
            <br />
            experts du secteur et en collaboration avec nos entreprises <br />
            partenaires. Préparez-vous pour le monde professionnel en
            <br />travaillant sur des projets réels.
          </p>
          <button>
            Parcourir
            <img
              src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Arrow.png"
              alt="fleche"
              className="fleche"
            />
          </button>
        </div>
      </div>
      <div className="tabledesmatieres">
        <div className="data matiere">
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/04/Vector-1.png"
            alt="data"
            className="momo"
          />
          <h2 className="soustitre">Data</h2>
          <a href="#" className="Parcourir">Parcourir</a>
        </div>
        <div className="web matiere">
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/04/Vector-3.png"
            alt="web"
            className="momo"
          />
          <h2 className="soustitre">Web</h2>
          <a href="#" className="Parcourir">Parcourir</a>
        </div>
        <div className="design matiere">
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/04/Group-6859-91x50.png"
            alt="design"
            className="momo"
          />
          <h2 className="soustitre">Design</h2>
          <a href="#" className="Parcourir">Parcourir</a>
        </div>
        <div className="marketing matiere">
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/04/Vector.png"
            alt="marketing"
            className="momo"
          />
          <h2 className="soustitre">Marketing</h2>
          <a href="#" className="Parcourir">Parcourir</a>
        </div>
      </div>
    </div>

    </>
  );
};
export default Grandbleu;