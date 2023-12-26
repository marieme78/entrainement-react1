import React from "react";
const Header = () => {
  return <>
      <div class="header">
      <nav>
        <img
          src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Gomycode-SN.svg"
          alt="GOMYCODE"
          class="logo"
        />
        <ul>
          <li>
            <a href="#"><b>Nos formations</b></a>
          </li>
          <li>
            <a href="#"><b>Découvrir GOMYCODE</b></a>
          </li>
          <li>
            <a href="#"><b>Hackerspaces</b></a>
          </li>
          <li>
            <a href="#"><b>En ligne</b></a>
          </li>
          <li>
            <a href="#"><b>GOMYTECH</b></a>
          </li>
        </ul>
        <input
          id="searchbar"
          onkeyup="search_animal()"
          type="text"
          name="search"
          placeholder="Rechercher..."
        />
        <ul>
          <li>SN</li>
          <li>FR</li>
        </ul>
      </nav>
    </div>

  </>;
};
export default Header;
