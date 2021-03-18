import React, { Component } from "react";
import Header from "../../Header";
import Helmet from "../../Helmet";
import Footer from "../../Footer";

class Galerie_Vero_Dodat extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={"Galerie Véro-Dodat Découverte de la Normandie et du Littoral"}
          link={"http://decouverte.guillaumequeste.fr/galerie_vero-dodat"}
        />
        <Header />
        <Footer />
        <div className="bodyAutres">
          <h1 className="titleAutres">Galerie Véro-Dodat</h1>
          <div className="divPhoto">
            <img
              src={require("../../../img/autres/arc_de_triomphe/arc_de_triomphe.jpeg")}
              alt="arc_de_triomphe"
              className="photo"
            />
          </div>
          <div className="container">
            <p>
            La galerie Véro-Dodat est un passage couvert parisien situé dans le 1er arrondissement.
            </p>
            <p className="lienSiteOfficiel">
              Site officiel :{" "}
              <a
                href="https://www.parisinfo.com/musee-monument-paris/100259/Galerie-Vero-Dodat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Galerie Véro-Dodat
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Galerie_Vero_Dodat;
