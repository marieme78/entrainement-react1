import React from "react";
const Slide = () => {
  return (
    <>
      <div style={{ display: "flex",marginTop:50 }} className="grandslide">
        <h1 className="temoins">
          <b>
            Nos étudiants <br></br> témoignent
          </b>
        </h1>
        {/* slide num1 */}
        <div className="scroll" style={{display:"flex"}}>
        <div className="divslide" id="slide1">
          <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/04/design-2-1.jpg" className="imagedestemoins"></img>
          <div>
            <div className="paragraphetemoins">
            <p>
              "La chèvre de monsieur Seguin Quand la chèvre blanche arriva dans
              la montagne, ce fut un ravissement général. Jamais les vieux
              sapins n'avaient rien vu d'aussi joli. On la reçut comme une"
            </p>
            <h4>Konan Abdias</h4>
            </div>
          </div>
        </div>
        {/* slide num2 */}
        <div className="divslide" id="slide2">
          <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Bootcamp-3.jpg" className="imagedestemoins"></img>
          <div className="paragraphetemoins">
            <p>
              "La chèvre de monsieur Seguin Quand la chèvre blanche arriva dans
              la montagne, ce fut un ravissement général. Jamais les vieux
              sapins n'avaient rien vu d'aussi joli. On la reçut comme une"
            </p>
            <h4>Mamadou Oury Diallo</h4>
          </div>
        </div>
        <div className="divslide" id="slide3">
          <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/02/Web-4-1.jpg" className="imagedestemoins"></img>
          <div className="paragraphetemoins">
            <p>
              "La chèvre de monsieur Seguin Quand la chèvre blanche arriva dans
              la montagne, ce fut un ravissement général. Jamais les vieux
              sapins n'avaient rien vu d'aussi joli. On la reçut comme une"
            </p>
            <h4>Sokhna Aida Saliou</h4>
          </div>
        </div>
        <div className="divslide" id="slide4">
          <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Web-2-2.jpg" className="imagedestemoins"></img>
          <div className="paragraphetemoins">
            <p>
             " La chèvre de monsieur Seguin Quand la chèvre blanche arriva dans
              la montagne, ce fut un ravissement général. Jamais les vieux
              sapins n'avaient rien vu d'aussi joli. On la reçut comme une"
            </p>
            <h4>Mame Fatima Ndiaye</h4>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Slide;
