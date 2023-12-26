import React from "react";
const Grandevideo = () => {
  return (
    <>
      <div className="grandevideo" style={{color:"white"}}>
        <div className="divdeschoix">
          <div className="choice">
            <img
              src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/03/Group-4328-74x50.png"
              alt="lunettes"
            />
            <p className="statis">+30 000</p>
            <p className="quoi">Étudiants formés</p>
          </div>
          <div className="choice">
            <img
              src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/03/Group-4339.png"
              alt="medailles"
            />
            <p className="statis">+1 500</p>
            <p className="quoi">Instructeurs</p>
          </div>
          <div className="choice">
            <img
              src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/03/Group-4338-50x50.png"
              alt="rubix"
            />
            <p className="statis">+200</p>
            <p className="quoi">Partenaires recruteurs</p>
          </div>
          <div className="choice">
            <img
              src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/03/Group-4343-1-49x50.png"
              alt="drapeau"
            />
            <p className="statis">+30</p>
            <p className="quoi">Formations</p>
          </div>
        </div>
        <div style={{display:"flex"}}>
          <div>
            <h1 className="expérience" >
              <b>Vivez la vraie expérience <br></br> Hackerspace !</b>
            </h1>
          </div>
          <div className="haci">
            <p>
              Nos hackerspaces offrent un cadre convivial et motivant où les
              <br />
              étudiants sont entourés d'une équipe GOMYCODE compétente, <br />
              toujours prête à les aider et à les inspirer. <br />
            </p>
            <button style={{height:"50"}}>
              Découvrir nos espaces

            </button>
          </div>
        </div>
        <div>
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/10/Untitled-24-1.png"
            alt=""
            className="mp"
          />
        </div>
      </div>
    </>
  );
};
export default Grandevideo;
