import React from "react";
const Formation = () => {
  return (
    <>
      <div className="formation">
        <div className="texte">
          <div className="carriere">
            <h1 style={{color:"white",marginLeft:"120px",fontSize:"50px"}}>
              Transformez votre passion en <br />
              carriére
            </h1>
          </div>
          <div className="compétence">
            <p>
              Améliorez vos compétences dans le domaine de vos rêves en <br />
              suivant des cours dispensés par des instructeurs qualifiés, et
              <br />
              augmentez vos chances de vous faire embaucher par les <br />
              entreprises les plus prestigieuses
            </p>
          </div>
        </div>
        <div className="toutlescours">
          <div className="rang1 range">
            <div className="produit">
              <img
                src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/09/Group-1000000895.png"
                alt=""
                className="cycy"
              />
              <h5>Web</h5>
              <h2>
                Cybersecurity Bootcamp: <br />
                Security+ Certification
              </h2>
            </div>
            <div className="produit">
              <img
                src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/02/Kids-1-480x304.jpg"
                alt=""
                className="cybersecstudent"
              />
              <h2>Kids Tech Program</h2>
            </div>
            <div className="produit">
              <img
                src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/03/UI-design-1-480x304.jpg"
                alt=""
                className="cybersecstudent"
              />
              <h5>Design</h5>
              <h2>
                Introduction to User <br />
                Interface Design
              </h2>
            </div>
            <div className="produit">
              <img
                src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/04/Tech-for-business-2-480x304.jpg"
                alt=""
                className="cybersecstudent"
              />
              <h5>Marketing</h5>
              <h2>
                Business Consulting: The <br />
                Complete Guide
              </h2>
            </div>
          </div>
          <div className="rang2 range">
            <div className="produit">
              <img
                src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/03/SEO-et-E-commerce-480x304.jpg"
                alt=""
                className="cybersecstudent"
              />
              <h5>Marketing</h5>
              <h2>
                Advanced digital marketing: <br />
                E-commerce & SEO
              </h2>
            </div>
            <div className="produit">
              <img
                src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/03/Graphic-design-bootcamp-480x304.jpg"
                alt=""
                className="cybersecstudent"
              />
              <h5>Bootcamps</h5>
              <h2>
                The Ultimate Design <br />
                Bootcamp
              </h2>
            </div>
            <div className="produit">
              <img
                src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/02/Game-480x304.jpg"
                alt=""
                className="cybersecstudent"
              />
              <h5>Kids and Game</h5>
              <h2>
                Introduction to 2D Game <br />
                Development
              </h2>
            </div>
            <div className="produit">
              <img
                src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/04/devops-480x304.jpg"
                alt=""
                className="cybersecstudent"
              />
              <h5>Bootcamps</h5>
              <h2>The DevOps Bootcamp</h2>
            </div>
          </div>
        </div>
        <button className="voir" style={{padding:20}}>Voir plus
        <img src="https://gomycode.com/sn/wp-content/uploads/sites/10/2023/05/Arrow.png" style={{height:20,width:50}}></img>
        </button>
      </div>
    </>
  );
};
export default Formation;
