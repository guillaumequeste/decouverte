import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Jardin_Palais_Royal extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Jardin du Palais Royal Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/jardin_palais_royal"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Jardin du Palais Royal</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/jardin_palais_royal/jardin_palais_royal01.jpg")}
              alt="jardin_palais_royal"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              Le jardin du Palais-Royal est un grand square parisien de 20 850
              m2 situé dans le 1er arrondissement de Paris et construit en 1633
              au centre du Palais-Royal. Le jardin est labellisé « jardin
              remarquable ».
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="http://www.domaine-palais-royal.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Domaine national du Palais Royal
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_palais_royal/jardin_palais_royal02.jpg")}
                alt="jardin_palais_royal02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_palais_royal/jardin_palais_royal03.jpg")}
                alt="jardin_palais_royal03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_palais_royal/jardin_palais_royal04.jpg")}
                alt="jardin_palais_royal04"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_palais_royal/jardin_palais_royal05.jpg")}
                alt="jardin_palais_royal05"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_palais_royal/jardin_palais_royal06.jpg")}
                alt="jardin_palais_royal06"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/jardin_palais_royal/jardin_palais_royal07.jpg")}
                alt="jardin_palais_royal07"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Jardin_Palais_Royal;
