import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

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
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
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
        </div>
      </div>
    );
  }
}

export default Eglise_Saint_Sulpice;
