import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Tour_Montparnasse extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Tour Montparnasse Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/tour_montparnasse"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Tour Montparnasse</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/tour_montparnasse/tour_montparnasse.jpeg")}
              alt="tour_montparnasse"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La tour Montparnasse est le plus haut gratte-ciel de Paris
              intra-muros, situé dans le quartier Necker (15e arrondissement) de
              Paris. Sa hauteur de 209 m1 (ou 210 m selon les sources2) en a
              fait pendant près de quarante ans l'immeuble le plus haut de
              France, jusqu'à l'achèvement, à Courbevoie - La Défense en 2011,
              de la tour First3. Inaugurée en 1973, elle fut conçue par les
              architectes Jean Saubot, Eugène Beaudouin, Urbain Cassan et Louis
              de Hoÿm de Marien4. Elle fait partie de l'ensemble immobilier Tour
              Maine-Montparnasse (EITMM).
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.tourmontparnasse56.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tour Montparnasse
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tour_Montparnasse;
