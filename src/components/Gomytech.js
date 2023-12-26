import React from "react";
import '../App.css';
const Gomytech = () => {
  return (
    <>
      <div className="gommyt">
        <div style={{marginLeft:130,fontSize:20}}>
          <h1>
            Plongez dans le monde fascinant de la <br />
            technologie
          </h1>
        </div>
        <div style={{marginLeft:"70"}}>
          <h2>
            GOMYTECH vous permet de rester à la pointe du progrès et de <br />
            découvrir les dernières tendances et innovations dans le domaine
            <br />
            de la Tech
          </h2>
          <button>
            Lire plus d'article
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2222%22%20height%3D%2216%22%20viewBox%3D%220%200%2022%2016%22%20fill%3D%22none%22%3E%3Cline%20x1%3D%220.5%22%20y1%3D%228.17816%22%20x2%3D%2220.5002%22%20y2%3D%228.17816%22%20stroke%3D%22%23FFFAF3%22%20stroke-linecap%3D%22round%22%3E%3C%2Fline%3E%3Cpath%20d%3D%22M13.4399%200.627991C13.7549%201.95157%2015.708%205.27459%2021%207.97806%22%20stroke%3D%22%23FFFAF3%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M13.4399%2015.372C13.7549%2014.0484%2015.708%2010.7254%2021%208.02194%22%20stroke%3D%22%23FFFAF3%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
              alt=""
            />
          </button>
        </div>
      </div>
      <div style={{display:"flex"}} className="boyave">
        <div>
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/11/Artboard-1-copy-1.jpg"
            alt=""
            id="garsdudessin"
          />
          <h2>
            Les 5 trucs à savoir sur le tout premier <br />
            OpenAI DevDay 2023
          </h2>
          <h4>
            Que tu crées ton GPT ou que tu explores le store GPT, le GPT- <br />
            4 Turbo et l’API des assistants, voici le guide complet de <br />
            l’OpenAI DevDay 2023.
          </h4>
          <a href="#">Continuer à lire </a>
        </div>
        <div>
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/11/gomytech-Aout-24.jpg"
            alt=""
            id="imageverte"
          />
          <h2>Comment devenir un Data Scientist</h2>
          <h4>
            Découvre comment devenir data scientist sans diplôme <br />
            universitaire en développant tes compétences et en <br />
            acquérant de l’expérience pratique, en obtenant une
          </h4>
          <a href="#">Continuer à lire </a>
        </div>
        <div>
          <img
            src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/11/blog-8-fr-400x225.png"
            alt=""
            id="imagerouge"
          />
          <h2>
            Comment Devenir Développeur de <br />
            Logiciels ?
          </h2>
          <h4>
            Découvre comment devenir un Développeur de Logiciels sans <br />
            avoir de diplôme universitaire en développant tes <br />
            compétences et ton expérience pratique, en obtenant une
          </h4>
          <a href="#">Continuer à lire </a>
        </div>
      </div>
    </>
  );
};
export default Gomytech;