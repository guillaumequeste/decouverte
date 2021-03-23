import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Eglise_Saint_Julien_le_Pauvre extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Eglise Saint-Julien-le-Pauvre Découverte de la Normandie et du Littoral"
          }
          link={
            "http://decouverte.guillaumequeste.fr/eglise_saint-julien-le-pauvre"
          }
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Eglise Saint-Julien-le-Pauvre</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/eglise_saint-julien-le-pauvre/eglise_saint-julien-le-pauvre01min.jpg")}
              alt="eglise_saint-julien-le-pauvre01min"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              L’église Saint-Julien-le-Pauvre est une église médiévale située
              rive gauche de la Seine à Paris dans le quartier latin, rue
              Saint-Julien-le-Pauvre dans le square René-Viviani. C'est depuis
              la fin du xixe siècle l'église grecque-melkite-catholique de
              Paris, au rite byzantin.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.patrimoine-histoire.fr/Patrimoine/Paris/Paris-Saint-Julien-le-Pauvre.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eglise Saint-Julien-le-Pauvre
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint-julien-le-pauvre/eglise_saint-julien-le-pauvre02.jpg")}
                alt="eglise_saint-julien-le-pauvre02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint-julien-le-pauvre/eglise_saint-julien-le-pauvre03.jpg")}
                alt="eglise_saint-julien-le-pauvre03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint-julien-le-pauvre/eglise_saint-julien-le-pauvre04.jpg")}
                alt="eglise_saint-julien-le-pauvre04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Eglise_Saint_Julien_le_Pauvre;
