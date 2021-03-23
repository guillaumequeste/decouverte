import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Galerie_Vivienne extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Galerie Vivienne Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/galerie_vivienne"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Galerie Vivienne</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/galerie_vivienne/galerie_vivienne01.jpg")}
              alt="galerie_vivienne01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
            La galerie Vivienne est un passage couvert du 2e arrondissement de Paris.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/100272/Galerie-Vivienne"
                target="_blank"
                rel="noopener noreferrer"
              >
                Galerie Vivienne
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galerie_vivienne/galerie_vivienne02.jpg")}
                alt="galerie_vivienne02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/galerie_vivienne/galerie_vivienne03.jpg")}
                alt="galerie_vivienne03"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Galerie_Vivienne;
