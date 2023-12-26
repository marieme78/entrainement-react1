import React from "react";
const Inscription = () => {
  return (
    <>
      <div style={{ display: "flex" }} className="imgform">
        <div className="formulaire">
          <h1 className="sasa">Inscrivez-vous maintenant!</h1>
          <form >
            <ul>
              <li>
                <label for="name">Nom*:</label> <br />
                <input type="text" id="name" name="user_name" placeholder="Votre nom" />
                <hr className="ligne"></hr>
              </li>
              <li>
                <label for="name">Prenom*</label> <br />
                <input type="text" id="name" name="user_name" placeholder="Votre prenom"/>
                <hr className="ligne"></hr>
              </li>
              <li>
                <label for="mail">E-mail*</label> <br />
                <input type="email" id="mail" name="user_mail" placeholder="Votre E-mail" />
                <hr className="ligne"></hr>
              </li>
              <li>
                <label type="number">telephone*</label> <br />
                <input type="number" id="number" name="user_num" placeholder="numero de telephone" />
                <hr className="ligne"></hr>
              </li>
              <li>
              <select name="Choose country" id="listd">
                  <option class="query" value="">Choisissez votre espaces</option>
                  <option class="query" value="">Point E hacker-space</option>
                  <option class="query" value="">Senegal Online Hackerspaces</option>
                  <option value="">Yoff Hackerspaces</option>
                  <option value="">Dokki Hackerspaces</option>
                </select>
              </li>
            </ul>

            <div class="button">
              <button className="bgbg">S'inscrire</button>
            </div>
          </form>
        </div>
        <div className="hommellunette">
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Mask-group-5.png"
            alt=""
            className="red"
          />
        </div>
      </div>
    </>
  );
};
export default Inscription;
