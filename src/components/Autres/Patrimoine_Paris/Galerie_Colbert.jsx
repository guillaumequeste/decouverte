import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Galerie_Colbert extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Galerie Colbert Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/galerie_colbert"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Galerie Colbert</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/galerie_colbert/galerie_colbert01.jpg")}
              alt="galerie_colbert01"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
              La galerie Colbert est un passage couvert parisien situé dans le
              2e arrondissement.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/100269/Galerie-Colbert"
                target="_blank"
                rel="noopener noreferrer"
              >
                Galerie Colbert
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Galerie_Colbert;
