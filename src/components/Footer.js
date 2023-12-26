import React from "react";
import '../App.css';
const Footer = () => {
  return (
    <>
      <footer style={{color:"white"}}>
        <img
          src="https://gomycode.com/sn/wp-content/uploads/sites/10/2022/07/white-logo-300x38.png"
          alt=""
          class="white-logo"
        />
        <div style={{display:"flex"}} className="ecriturebas">
          <div>
            <p>Immeuble Elh Omar Dia, Bd de St Louis, Dakar, Sénégal</p>
            <p>+221 33 825 62 92</p>
            <p>+221 77 526 38 59</p>
            <p>hello@gomycode.com</p>
          </div>
          <div>
            <p>Nos formations</p>
            <p>Hackerspaces</p>
            <p>GOMYTECH</p>
          </div>
          <div>
            <p>Découvrir GOMYCODE</p>
            <p>Carrières</p>
            <p>Politiques GOMYCODE</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;