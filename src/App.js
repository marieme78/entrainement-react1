import React from "react";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import Partenaire from "./components/Partenaire";
import Grandbleu from "./components/Grandbleu";
import Formation from "./Formation";
import Slide from "./Slide";
import Education from "./Education";
import Grandevideo from "./Grandevideo";
import Gomytech from "./components/Gomytech";
import Footer from "./components/Footer";
import './App.css'; 
import Inscription from "./components/Inscription";

const App = () => {
  return (
    <>
      <Header />
      <Accueil/>
      <Partenaire/>
       <Grandbleu/> 
      <Formation/>
      <Slide/>
      <Education/>
       <Grandevideo/>
      <Gomytech/>
      <Inscription/>
      <Footer/>
    </>
  );
};

export default App;