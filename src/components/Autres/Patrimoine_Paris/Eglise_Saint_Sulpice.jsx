import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";
import Zoom from "react-reveal/Zoom";

class Eglise_Saint_Sulpice extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={
            "Eglise Saint-Sulpice Découverte de la Normandie et du Littoral"
          }
          link={"http://decouverte.guillaumequeste.fr/eglise_saint-sulpice"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Eglise Saint-Sulpice</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/eglise_saint-sulpice/eglise_saint-sulpice01.jpg")}
              alt="eglise_saint-sulpice01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              L'église Saint-Sulpice est une église paroissiale catholique
              située dans le quartier de l'Odéon, dans le 6e arrondissement de
              Paris.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.paris.catholique.fr/-saint-sulpice-.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eglise Saint-Sulpice
              </a>
            </p>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint-sulpice/eglise_saint-sulpice02.jpg")}
                alt="eglise_saint-sulpice02"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint-sulpice/eglise_saint-sulpice03.jpg")}
                alt="eglise_saint-sulpice03"
                className="photo"
              />
            </Zoom>
          </div>
          <div className="divPhoto">
            <Zoom>
              <img
                src={require("../../../img/autres/eglise_saint-sulpice/eglise_saint-sulpice04.jpg")}
                alt="eglise_saint-sulpice04"
                className="photo"
              />
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}

export default Eglise_Saint_Sulpice;
